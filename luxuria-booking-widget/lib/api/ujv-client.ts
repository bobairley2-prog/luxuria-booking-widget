/**
 * UJV API Client
 * Server-side only - handles authentication and API calls
 */

const API_BASE_URL = process.env.UJV_API_BASE_URL || 'https://api-staging.ujv.app';
const CLIENT_ID = process.env.UJV_CLIENT_ID || '26';
const CLIENT_SECRET = process.env.UJV_CLIENT_SECRET;
const USERNAME = process.env.UJV_USERNAME || 'luxuria';
const PASSWORD = process.env.UJV_PASSWORD;

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

class UJVClient {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiry: number | null = null;

  /**
   * Authenticate with password grant
   */
  async authenticate(): Promise<void> {
    const response = await fetch(`${API_BASE_URL.replace('/v1/ta', '')}/v1/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'password',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: USERNAME,
        password: PASSWORD,
      }),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.statusText}`);
    }

    const data: { data: TokenResponse } = await response.json();
    this.accessToken = data.data.access_token;
    this.refreshToken = data.data.refresh_token;
    this.tokenExpiry = Date.now() + (data.data.expires_in * 1000);
  }

  /**
   * Refresh access token
   */
  async refreshAccessToken(): Promise<void> {
    if (!this.refreshToken) {
      await this.authenticate();
      return;
    }

    const response = await fetch(`${API_BASE_URL}/v1/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: this.refreshToken,
      }),
    });

    if (!response.ok) {
      // If refresh fails, re-authenticate
      await this.authenticate();
      return;
    }

    const data: { data: TokenResponse } = await response.json();
    this.accessToken = data.data.access_token;
    this.refreshToken = data.data.refresh_token;
    this.tokenExpiry = Date.now() + (data.data.expires_in * 1000);
  }

  /**
   * Ensure we have a valid token
   */
  private async ensureAuthenticated(): Promise<void> {
    if (!this.accessToken || !this.tokenExpiry) {
      await this.authenticate();
      return;
    }

    // Refresh if token expires in less than 5 minutes
    if (Date.now() > this.tokenExpiry - (5 * 60 * 1000)) {
      await this.refreshAccessToken();
    }
  }

  /**
   * Make authenticated API request
   */
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    await this.ensureAuthenticated();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get property summary (all properties)
   */
  async getPropertiesSummary(limit?: number) {
    const params = new URLSearchParams();
    if (limit) params.set('limit', limit.toString());
    
    return this.request(`/v1/content/properties/summary${params.toString() ? `?${params}` : ''}`);
  }

  /**
   * Get detailed property information
   */
  async getPropertyDetails(propertyIds: string[]) {
    const params = new URLSearchParams();
    propertyIds.forEach(id => params.append('property_ids', id));
    
    return this.request(`/v1/content/properties/details?${params}`);
  }

  /**
   * Check availability for properties
   */
  async checkAvailability(params: {
    property_ids: string[];
    check_in: string; // YYYY-MM-DD
    check_out: string; // YYYY-MM-DD
    occupancy: string; // e.g., "2" or "2-9,4"
  }) {
    const searchParams = new URLSearchParams();
    params.property_ids.forEach(id => searchParams.append('property_ids', id));
    searchParams.set('check_in', params.check_in);
    searchParams.set('check_out', params.check_out);
    searchParams.set('occupancy', params.occupancy);
    
    return this.request(`/v1/availability/properties/details?${searchParams}`);
  }

  /**
   * Get basket details
   */
  async getBasket(basketId: string) {
    return this.request(`/v1/baskets/${basketId}`);
  }

  /**
   * Add item to basket
   */
  async addToBasket(basketId: string, offerId: string, travelers: any[]) {
    return this.request(`/v1/baskets/${basketId}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        offer_id: offerId,
        travelers,
      }),
    });
  }

  /**
   * Confirm booking
   */
  async confirmBooking(basketId: string, bookingData: any) {
    return this.request(`/v1/baskets/${basketId}/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
  }

  /**
   * Get trip details
   */
  async getTrip(tripId: string) {
    return this.request(`/v1/trips/${tripId}`);
  }
}

// Export singleton instance
export const ujvClient = new UJVClient();
