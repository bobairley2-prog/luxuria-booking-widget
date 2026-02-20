/**
 * TypeScript types for UJV API responses
 * Based on actual API testing from api-testing-progress.md
 */

// Common types
export interface Location {
  city: string;
  state?: string;
  country: string;
  region?: string;
}

export interface Image {
  url: string;
  alt?: string;
  caption?: string;
  order?: number;
}

export interface Amenity {
  code: string;
  name: string;
  description?: string;
  icon?: string;
}

// Property Summary (Browse Collection)
export interface PropertySummary {
  id: string;
  name: string;
  location: Location;
  hero_image: string;
  description_short?: string;
  star_rating?: number;
}

export interface PropertiesSummaryResponse {
  data: PropertySummary[];
  meta?: {
    total: number;
    page: number;
    per_page: number;
  };
}

// Property Details
export interface PropertyDetails {
  id: string;
  name: string;
  location: Location;
  description: string;
  amenities: Amenity[];
  images: Image[];
  policies: {
    check_in: string;
    check_out: string;
    cancellation: string;
  };
  alerts?: string[];
  star_rating?: number;
}

export interface PropertyDetailsResponse {
  data: PropertyDetails[];
}

// Availability
export interface RateOffer {
  id: string;
  rate_name: string;
  rate_description?: string;
  total_fare: number;
  nightly_rate: number;
  currency: string;
  taxes: number;
  fees: number;
  commission: number;
  cancellation_policy: {
    refundable: boolean;
    description: string;
  };
  ultimate_amenities?: string[];
  restrictions?: string[];
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  images: Image[];
  amenities: Amenity[];
  occupancy: {
    max_adults: number;
    max_children: number;
    max_occupancy: number;
  };
  offers: RateOffer[];
}

export interface PropertyAvailability {
  property_id: string;
  property_name: string;
  rooms: RoomType[];
}

export interface AvailabilityResponse {
  data: PropertyAvailability[];
  basket_id?: string;
}

// Basket
export interface BasketItem {
  item_id: string;
  offer_id: string;
  property_id: string;
  property_name: string;
  room_name: string;
  rate_name: string;
  check_in: string;
  check_out: string;
  nights: number;
  occupancy: string;
  total_fare: number;
  currency: string;
}

export interface Basket {
  basket_id: string;
  items: BasketItem[];
  total: number;
  currency: string;
  expires_at: string;
  created_at: string;
}

export interface BasketResponse {
  data: Basket;
}

// Booking
export interface Traveler {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_primary: boolean;
}

export interface BookingRequest {
  travelers: Traveler[];
  payment: {
    method: string;
    token: string;
  };
  terms_accepted: boolean;
}

export interface BookingResponse {
  data: {
    trip_id: string;
    confirmation_number: string;
    status: 'confirmed' | 'pending' | 'failed';
  };
}

// Trip
export interface Trip {
  trip_id: string;
  confirmation_number: string;
  status: string;
  property_name: string;
  room_name: string;
  check_in: string;
  check_out: string;
  guests: Traveler[];
  total_amount: number;
  currency: string;
  created_at: string;
}

export interface TripResponse {
  data: Trip;
}
