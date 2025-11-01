// Product Database with 8 Categories
export const productsDatabase = [
  // Electronics (Category 1)
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'electronics',
    price: 89.99,
    oldPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    rating: 4.5,
    reviews: 342,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Cancellation': 'Active ANC',
      'Weight': '250g'
    }
  },
  {
    id: 2,
    name: '4K Ultra HD Smart TV 55"',
    category: 'electronics',
    price: 599.99,
    oldPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    rating: 4.7,
    reviews: 289,
    description: '55-inch 4K Smart TV with HDR support and streaming apps built-in.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD',
      'Smart Features': 'Yes',
      'HDR': 'HDR10'
    }
  },
  {
    id: 3,
    name: 'Gaming Laptop Pro',
    category: 'electronics',
    price: 1299.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
    rating: 4.8,
    reviews: 156,
    description: 'High-performance gaming laptop with RTX graphics and 144Hz display.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Processor': 'Intel i7',
      'Graphics': 'RTX 3060',
      'RAM': '16GB',
      'Storage': '512GB SSD'
    }
  },
  {
    id: 4,
    name: 'Smartphone Pro Max',
    category: 'electronics',
    price: 999.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.6,
    reviews: 512,
    description: 'Latest flagship smartphone with 5G, triple camera system, and all-day battery.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Display': '6.7" OLED',
      'Camera': '108MP Triple',
      'Battery': '5000mAh',
      '5G': 'Yes'
    }
  },

  // Fashion & Clothing (Category 2)
  {
    id: 5,
    name: 'Classic Leather Jacket',
    category: 'fashion',
    price: 199.99,
    oldPrice: 279.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    rating: 4.4,
    reviews: 234,
    description: 'Genuine leather jacket with timeless design and premium craftsmanship.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Polyester',
      'Closure': 'Zipper',
      'Care': 'Professional Clean'
    }
  },
  {
    id: 6,
    name: 'Summer Floral Dress',
    category: 'fashion',
    price: 79.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    rating: 4.5,
    reviews: 189,
    description: 'Lightweight floral dress perfect for summer occasions.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Material': 'Cotton Blend',
      'Pattern': 'Floral',
      'Fit': 'Regular',
      'Occasion': 'Casual'
    }
  },
  {
    id: 7,
    name: 'Premium Running Shoes',
    category: 'fashion',
    price: 129.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    rating: 4.7,
    reviews: 445,
    description: 'Professional running shoes with advanced cushioning technology.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Type': 'Running',
      'Cushioning': 'Max Comfort',
      'Upper': 'Breathable Mesh',
      'Sole': 'Rubber'
    }
  },
  {
    id: 8,
    name: 'Designer Handbag',
    category: 'fashion',
    price: 299.99,
    oldPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
    rating: 4.6,
    reviews: 178,
    description: 'Elegant designer handbag with multiple compartments.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Material': 'Premium Leather',
      'Compartments': 'Multiple',
      'Closure': 'Zipper',
      'Strap': 'Adjustable'
    }
  },

  // Home & Living (Category 3)
  {
    id: 9,
    name: 'Modern Sofa Set',
    category: 'home',
    price: 899.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    rating: 4.5,
    reviews: 267,
    description: '3-seater modern sofa with premium upholstery and comfort.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Seating': '3-Seater',
      'Material': 'Fabric',
      'Frame': 'Solid Wood',
      'Assembly': 'Required'
    }
  },
  {
    id: 10,
    name: 'Luxury Bedding Set',
    category: 'home',
    price: 149.99,
    oldPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500',
    rating: 4.8,
    reviews: 423,
    description: 'Premium cotton bedding set with duvet cover and pillowcases.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Material': '100% Cotton',
      'Thread Count': '800',
      'Set Includes': 'Duvet + Pillows',
      'Size': 'Queen'
    }
  },
  {
    id: 11,
    name: 'Contemporary Table Lamp',
    category: 'home',
    price: 79.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    rating: 4.4,
    reviews: 156,
    description: 'Stylish table lamp with adjustable brightness settings.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Style': 'Contemporary',
      'Light Source': 'LED',
      'Dimmable': 'Yes',
      'Height': '18 inches'
    }
  },
  {
    id: 12,
    name: 'Persian Area Rug',
    category: 'home',
    price: 349.99,
    oldPrice: 449.99,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500',
    rating: 4.7,
    reviews: 198,
    description: 'Hand-woven area rug with traditional Persian design.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Size': "8' x 10'",
      'Material': 'Wool',
      'Pattern': 'Persian',
      'Made': 'Handmade'
    }
  },

  // Beauty & Personal Care (Category 4)
  {
    id: 13,
    name: 'Anti-Aging Face Serum',
    category: 'beauty',
    price: 59.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    rating: 4.6,
    reviews: 534,
    description: 'Premium anti-aging serum with vitamin C and hyaluronic acid.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Volume': '30ml',
      'Key Ingredients': 'Vitamin C, Hyaluronic Acid',
      'Skin Type': 'All Types',
      'Cruelty-Free': 'Yes'
    }
  },
  {
    id: 14,
    name: 'Professional Hair Dryer',
    category: 'beauty',
    price: 89.99,
    oldPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500',
    rating: 4.5,
    reviews: 312,
    description: 'Ionic hair dryer with multiple heat and speed settings.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Power': '1875W',
      'Technology': 'Ionic',
      'Settings': 'Multiple',
      'Attachments': '2 Included'
    }
  },
  {
    id: 15,
    name: 'Makeup Brush Set',
    category: 'beauty',
    price: 49.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    rating: 4.7,
    reviews: 421,
    description: 'Professional makeup brush set with 12 essential brushes.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Pieces': '12 Brushes',
      'Bristles': 'Synthetic',
      'Handle': 'Wood',
      'Case': 'Included'
    }
  },
  {
    id: 16,
    name: 'Luxury Perfume Set',
    category: 'beauty',
    price: 129.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    rating: 4.8,
    reviews: 267,
    description: 'Premium fragrance collection with three signature scents.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Set Includes': '3 Bottles',
      'Volume': '50ml each',
      'Type': 'Eau de Parfum',
      'Notes': 'Floral, Woody, Citrus'
    }
  },

  // Sports & Fitness (Category 5)
  {
    id: 17,
    name: 'Yoga Mat Premium',
    category: 'sports',
    price: 39.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    rating: 4.6,
    reviews: 389,
    description: 'Non-slip yoga mat with extra cushioning for comfort.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE',
      'Length': '72 inches',
      'Non-Slip': 'Yes'
    }
  },
  {
    id: 18,
    name: 'Adjustable Dumbbell Set',
    category: 'sports',
    price: 199.99,
    oldPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    rating: 4.7,
    reviews: 234,
    description: 'Space-saving adjustable dumbbells with quick weight selection.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Weight Range': '5-52.5 lbs',
      'Increments': '2.5 lbs',
      'Material': 'Steel',
      'Stand': 'Included'
    }
  },
  {
    id: 19,
    name: 'Fitness Tracker Watch',
    category: 'sports',
    price: 149.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500',
    rating: 4.5,
    reviews: 512,
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Display': 'AMOLED',
      'Battery': '7 days',
      'GPS': 'Built-in',
      'Water Resistant': '50m'
    }
  },
  {
    id: 20,
    name: 'Resistance Band Set',
    category: 'sports',
    price: 29.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    rating: 4.4,
    reviews: 445,
    description: 'Complete resistance band set with multiple resistance levels.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Bands': '5 Pieces',
      'Resistance': 'Light to Heavy',
      'Material': 'Latex',
      'Accessories': 'Included'
    }
  },

  // Books & Media (Category 6)
  {
    id: 21,
    name: 'Bestselling Novel Collection',
    category: 'books',
    price: 49.99,
    oldPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    rating: 4.8,
    reviews: 678,
    description: 'Collection of top bestselling novels from award-winning authors.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Books': '5 Novels',
      'Genre': 'Fiction',
      'Format': 'Hardcover',
      'Language': 'English'
    }
  },
  {
    id: 22,
    name: 'Educational Learning Kit',
    category: 'books',
    price: 79.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500',
    rating: 4.6,
    reviews: 289,
    description: 'Interactive learning kit for children with books and activities.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Age Range': '6-12 years',
      'Content': 'Books + Activities',
      'Subjects': 'Multiple',
      'Interactive': 'Yes'
    }
  },
  {
    id: 23,
    name: 'Cookbook Collection',
    category: 'books',
    price: 39.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500',
    rating: 4.7,
    reviews: 356,
    description: 'Comprehensive cookbook collection with recipes from around the world.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Books': '3 Cookbooks',
      'Recipes': '500+',
      'Cuisines': 'International',
      'Format': 'Paperback'
    }
  },

  // Toys & Games (Category 7)
  {
    id: 24,
    name: 'Board Game Family Pack',
    category: 'toys',
    price: 59.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500',
    rating: 4.6,
    reviews: 423,
    description: 'Collection of classic board games for family entertainment.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Games': '4 Included',
      'Players': '2-6',
      'Age': '8+',
      'Duration': 'Varies'
    }
  },
  {
    id: 25,
    name: 'Remote Control Car',
    category: 'toys',
    price: 89.99,
    oldPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1558584673-c834fb56d7e5?w=500',
    rating: 4.5,
    reviews: 312,
    description: 'High-speed remote control car with all-terrain capabilities.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Speed': '30 mph',
      'Battery': 'Rechargeable',
      'Range': '100m',
      'Terrain': 'All-Terrain'
    }
  },
  {
    id: 26,
    name: 'Building Blocks Set',
    category: 'toys',
    price: 69.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500',
    rating: 4.8,
    reviews: 567,
    description: 'Creative building blocks set with 1000+ pieces.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Pieces': '1000+',
      'Material': 'ABS Plastic',
      'Age': '6+',
      'Compatible': 'Yes'
    }
  },

  // Garden & Outdoor (Category 8)
  {
    id: 27,
    name: 'Garden Tool Set',
    category: 'garden',
    price: 79.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500',
    rating: 4.5,
    reviews: 234,
    description: 'Complete gardening tool set with ergonomic handles.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Pieces': '10 Tools',
      'Material': 'Stainless Steel',
      'Handles': 'Ergonomic',
      'Bag': 'Included'
    }
  },
  {
    id: 28,
    name: 'Outdoor Patio Furniture',
    category: 'garden',
    price: 499.99,
    oldPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500',
    rating: 4.7,
    reviews: 178,
    description: 'Weather-resistant patio furniture set for outdoor relaxation.',
    inStock: true,
    badge: 'sale',
    specifications: {
      'Pieces': '4-Piece Set',
      'Material': 'Wicker',
      'Weather Resistant': 'Yes',
      'Cushions': 'Included'
    }
  },
  {
    id: 29,
    name: 'Smart Sprinkler System',
    category: 'garden',
    price: 199.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=500',
    rating: 4.6,
    reviews: 267,
    description: 'WiFi-enabled smart sprinkler system with app control.',
    inStock: true,
    badge: 'new',
    specifications: {
      'Zones': '8',
      'Control': 'WiFi/App',
      'Weather Aware': 'Yes',
      'Installation': 'Easy'
    }
  },
  {
    id: 30,
    name: 'LED Garden Lights',
    category: 'garden',
    price: 49.99,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500',
    rating: 4.4,
    reviews: 389,
    description: 'Solar-powered LED garden lights for pathway illumination.',
    inStock: true,
    badge: 'bestseller',
    specifications: {
      'Lights': '12 Pack',
      'Power': 'Solar',
      'Brightness': 'Adjustable',
      'Waterproof': 'Yes'
    }
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'FaLaptop' },
  { id: 'fashion', name: 'Fashion & Clothing', icon: 'FaTshirt' },
  { id: 'home', name: 'Home & Living', icon: 'FaHome' },
  { id: 'beauty', name: 'Beauty & Personal Care', icon: 'FaSpa' },
  { id: 'sports', name: 'Sports & Fitness', icon: 'FaDumbbell' },
  { id: 'books', name: 'Books & Media', icon: 'FaBook' },
  { id: 'toys', name: 'Toys & Games', icon: 'FaGamepad' },
  { id: 'garden', name: 'Garden & Outdoor', icon: 'FaLeaf' }
];
