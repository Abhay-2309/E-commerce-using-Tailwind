import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 24,
    description: 'Latest gadgets and electronic devices'
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 32,
    description: 'Trendy clothing and accessories'
  },
  {
    id: '3',
    name: 'Home & Living',
    slug: 'home-living',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 18,
    description: 'Beautiful home decor and furniture'
  },
  {
    id: '4',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 15,
    description: 'Sports equipment and activewear'
  },
  {
    id: '5',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 28,
    description: 'Skincare and beauty products'
  },
  {
    id: '6',
    name: 'Books',
    slug: 'books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 45,
    description: 'Books and educational materials'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Premium wireless headphones with industry-leading noise cancellation technology.',
    longDescription: 'Experience unparalleled audio quality with our premium wireless headphones. Featuring industry-leading noise cancellation technology, these headphones deliver crystal-clear sound while blocking out unwanted ambient noise. Perfect for travel, work, or relaxation.',
    rating: 4.8,
    reviews: 2341,
    inStock: true,
    featured: true,
    badge: 'bestseller',
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '3 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
      'Driver Size': '40mm'
    },
    colors: ['Black', 'Silver', 'Blue'],
    sizes: ['One Size']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    longDescription: 'Stay on top of your fitness goals with this advanced smartwatch. Features include continuous heart rate monitoring, built-in GPS, sleep tracking, and over 100 workout modes.',
    rating: 4.6,
    reviews: 1892,
    inStock: true,
    featured: true,
    badge: 'new',
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '14 days',
      'Water Resistance': '5ATM',
      'Storage': '4GB',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    },
    colors: ['Black', 'Rose Gold', 'Silver'],
    sizes: ['42mm', '46mm']
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 189.99,
    originalPrice: 279.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Premium genuine leather jacket with modern styling.',
    longDescription: 'Crafted from premium genuine leather, this designer jacket combines classic style with modern details. Perfect for both casual and semi-formal occasions.',
    rating: 4.7,
    reviews: 543,
    inStock: true,
    badge: 'sale',
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Polyester',
      'Care': 'Professional Clean Only',
      'Origin': 'Italy'
    },
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Minimalist Coffee Table',
    price: 399.99,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Living',
    description: 'Scandinavian-inspired coffee table with clean lines.',
    longDescription: 'This minimalist coffee table embodies Scandinavian design principles with its clean lines and functional beauty. Crafted from sustainable oak wood with a natural finish.',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: true,
    specifications: {
      'Material': 'Solid Oak Wood',
      'Dimensions': '120cm x 60cm x 45cm',
      'Weight': '25kg',
      'Finish': 'Natural Oil',
      'Assembly': 'Required'
    },
    colors: ['Natural Oak', 'White Oak', 'Dark Walnut']
  },
  {
    id: '5',
    name: 'Professional Running Shoes',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    longDescription: 'Engineered for performance, these professional running shoes feature advanced cushioning technology and lightweight construction for optimal comfort during long runs.',
    rating: 4.5,
    reviews: 1203,
    inStock: true,
    badge: 'new',
    specifications: {
      'Weight': '280g',
      'Drop': '10mm',
      'Upper': 'Breathable Mesh',
      'Sole': 'EVA Foam',
      'Suitable For': 'Road Running'
    },
    colors: ['Black/White', 'Blue/Orange', 'Gray/Green'],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12']
  },
  {
    id: '6',
    name: 'Vintage Camera',
    price: 599.99,
    image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Classic vintage camera for photography enthusiasts.',
    longDescription: 'Capture memories with this beautifully restored vintage camera. Perfect for photography enthusiasts who appreciate the art of analog photography.',
    rating: 4.4,
    reviews: 456,
    inStock: true,
    featured: true,
    specifications: {
      'Film Type': '35mm',
      'Lens': '50mm f/1.8',
      'Shutter Speed': '1/1000s - 1s',
      'Condition': 'Fully Restored',
      'Includes': 'Camera, Lens, Case'
    },
    colors: ['Black', 'Silver']
  }
];

// Add more products for pagination and filtering
for (let i = 7; i <= 50; i++) {
  const categoryIndex = (i - 1) % categories.length;
  const category = categories[categoryIndex];
  
  products.push({
    id: i.toString(),
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 200) + 300 : undefined,
    image: `https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    category: category.name,
    description: `High-quality ${category.name.toLowerCase()} product with premium features.`,
    rating: Math.floor(Math.random() * 2) + 4,
    reviews: Math.floor(Math.random() * 1000) + 100,
    inStock: Math.random() > 0.1,
    featured: Math.random() > 0.8,
    badge: Math.random() > 0.7 ? ['new', 'sale', 'bestseller'][Math.floor(Math.random() * 3)] as any : undefined
  });
}