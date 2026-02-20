'use client';

import Image from 'next/image';
import { Card, CardContent } from './Card';

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  onClick?: () => void;
}

export function PropertyCard({ 
  id, 
  name, 
  location, 
  imageUrl, 
  onClick 
}: PropertyCardProps) {
  return (
    <Card onClick={onClick}>
      <div className="relative aspect-luxury overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} - ${location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority={false}
        />
      </div>
      <CardContent>
        <h3 className="text-h4 font-serif mb-2 text-luxury-gray-900">
          {name}
        </h3>
        <p className="text-body-sm text-luxury-gray-600">
          {location}
        </p>
      </CardContent>
    </Card>
  );
}
