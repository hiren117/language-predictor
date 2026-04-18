// A single place to define reusable TypeScript types

// Describes a product item used across the app
export type Product = {
  id: number;          // unique identifier
  name: string;        // display name
  price: number;       // price in INR
  image: string;       // image URL
};
