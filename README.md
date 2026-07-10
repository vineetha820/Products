# Products Admin Application

This is a responsive product admin application built with Create React App. It includes authentication screens, a product dashboard, product listing, cart management, and product orders.

## Tech Stack

- React
- Create React App
- React Router DOM
- Bootstrap
- Font Awesome
- CSS3

## Features

- Register, Login, and OTP verification pages
- Responsive dashboard layout with fixed sidebar
- Products page with:
  - Product cards
  - Product images
  - Search functionality
  - Add to cart action
- Cart page with:
  - Added products list
  - Quantity display
  - Add more product action
  - Remove product action
- Product Orders page with product-related order data
- Responsive layout for mobile, tablet, and laptop screens
- Bootstrap utility classes for layout and UI styling
- Font Awesome icons for buttons, sidebar, and visual actions

## Pages and Routes

- `/register` - Register page
- `/login` - Login page
- `/otp` - OTP verification page
- `/dashboard` - Product dashboard
- `/products` - Products listing page
- `/cart` - Cart page
- `/orders` - Product orders page

## Project Structure

```text
products/
  public/
    product-images/
    auth-image.png
  src/
    components/
      AuthCard.js
      DashboardLayout.js
      ProductCard.js
    context/
      CartContext.js
    pages/
      CartPage.js
      DashboardPage.js
      LoginPage.js
      OrdersPage.js
      OtpPage.js
      ProductsPage.js
      RegisterPage.js
    App.css
    App.js
    data.js
    index.js
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production in the `build` folder.

### `npm test`

Runs the test watcher.

### `npm run eject`

Ejects the Create React App configuration. This is a one-way operation and is not required for normal development.

## Notes

- The app uses `BrowserRouter`, so direct route access works in development with Create React App.
- Product and authentication images are stored locally in the `public` folder.
- Cart data is managed in React state using `CartContext`.
