/*
  # E-commerce Schema for Heartfelt Paper Co.

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Short product description
      - `price` (decimal) - Product price
      - `category` (text) - Category: Cards, Prints, or Personalised
      - `image_url` (text) - Product image URL
      - `featured` (boolean) - Whether to show on homepage
      - `created_at` (timestamptz)
    
    - `email_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique) - Customer email
      - `subscribed_at` (timestamptz)
    
    - `custom_orders`
      - `id` (uuid, primary key)
      - `occasion` (text) - Occasion for the card/print
      - `recipient` (text) - Who it's for
      - `message` (text) - Message or wording
      - `color_preferences` (text) - Color preferences
      - `photo_url` (text) - Optional uploaded photo
      - `customer_name` (text) - Customer name
      - `customer_email` (text) - Customer email
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Products are publicly readable
    - Email signups can be inserted by anyone
    - Custom orders can be inserted by anyone
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS custom_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  occasion text NOT NULL,
  recipient text NOT NULL,
  message text NOT NULL,
  color_preferences text DEFAULT '',
  photo_url text DEFAULT '',
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable"
  ON products
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can sign up for emails"
  ON email_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit custom orders"
  ON custom_orders
  FOR INSERT
  TO anon
  WITH CHECK (true);