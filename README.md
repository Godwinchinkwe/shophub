# ShopHub React - Modern eCommerce Application

A fully responsive, modern eCommerce application built with React, featuring a complete shopping experience with cart management, wishlist, checkout process, and multiple pages.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ using functional components and hooks
- **Global State Management**: Context API for cart and wishlist management
- **Routing**: React Router DOM v6+ for seamless navigation
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean design with rounded corners, soft shadows, and smooth hover effects
- **CSS Modules**: Component-specific styling for better maintainability
- **8 Product Categories**: Electronics, Fashion, Home, Beauty, Sports, Books, Toys, Garden
- **30 Products**: Full product database with detailed information
- **LocalStorage**: Persistent cart and wishlist data

## 📦 Pages

1. **Home** - Hero slider, categories, featured products
2. **Products** - Filterable product catalog with sorting
3. **Cart** - Shopping cart with quantity management
4. **Checkout** - Complete checkout flow with forms
5. **Account** - User profile, wishlist, orders
6. **About** - Company information
7. **Contact** - Contact form with business information
8. **FAQ** - Frequently asked questions

## 🛠️ Technologies

- React 18.2.0
- React Router DOM 6.20.0
- React Icons 4.12.0
- Framer Motion 10.16.16
- CSS3 (Component Modules)
- Google Fonts (Poppins)

## 📁 Project Structure

```
shophub-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── HeroSlider/
│   │   └── CategoryCard/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Account/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── FAQ/
│   ├── context/
│   │   └── CartContext.js
│   ├── data/
│   │   └── productsDatabase.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd shophub-react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Design Features

- **Color Scheme**: Modern blue palette with accent colors
- **Typography**: Poppins font for clean, modern look
- **Border Radius**: 12px rounded corners throughout
- **Shadows**: Soft box-shadows for depth
- **Hover Effects**: Smooth transitions and transforms
- **Mobile Responsive**: Breakpoints at 968px, 768px, and 480px

## 🔧 Configuration

### Color Variables (in index.css)

```css
--primary-color: #2563eb;
--primary-dark: #1d4ed8;
--primary-light: #3b82f6;
--accent-color: #f59e0b;
--success-color: #10b981;
--error-color: #ef4444;
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🛒 Cart Features

- Add to cart from any product
- Update quantities
- Remove items
- Persistent storage with localStorage
- Real-time total calculation
- Cart badge in header

## 💝 Wishlist Features

- Add/remove products from wishlist
- View all wishlist items in Account page
- Heart icon toggle on product cards
- Persistent storage with localStorage

## 🎯 Key Components

### CartContext
Global state management for cart and wishlist operations.

### ProductCard
Reusable product display component with animations, badges, and actions.

### Header
Fixed header with search, cart badge, wishlist, and responsive navigation.

### Footer
Comprehensive footer with features, links, categories, and newsletter.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Support

For support, email support@shophub.com or visit our contact page.

## 🙏 Acknowledgments

- Product images from Unsplash
- Icons from React Icons (Font Awesome)
- Fonts from Google Fonts

---

Built with ❤️ using React
