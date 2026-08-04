export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  showPrice: boolean;
  startingFrom: boolean;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  images: string[];
  videos: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  caption: string;
  images: string[];
  videos: string[];
  date: string;
  featured: boolean;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
  date: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: 'before-after' | 'client-outfit' | 'fashion-shoot' | 'video' | 'process';
  images: string[];
  video?: string;
  description: string;
  date: string;
  tags: string[];
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  address: string;
  businessHours: string;
  googleMapsEmbed: string;
  heroImages: string[];
  heroHeadline: string;
  heroSubheading: string;
  seoTitle: string;
  seoDescription: string;
}

export interface TrustStat {
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
}
