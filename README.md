# SwiftBite - Premium Food Ordering Website

This repository hosts the source code for **SwiftBite**, a high-performance, modern food delivery application built with the MERN Stack. It features a premium UI/UX design with smooth animations, a responsive "sliding capsule" navigation system, and a robust admin dashboard.

## Demo

- User Panel: [https://swiftbite-food.vercel.app/](https://swiftbite-food.vercel.app/)
- Admin Panel: [https://swiftbite-admin.vercel.app/](https://swiftbite-admin.vercel.app/)
- Backend API: [https://swiftbite-backend-rvie.onrender.com/](https://swiftbite-backend-rvie.onrender.com/)

## Features

- **Premium UI/UX**: Rebranded with a modern "SwiftBite" aesthetic using the **Poppins** geometric font.
- **Sliding Capsule Navigation**: An interactive, animated Navbar built with **Framer Motion** that tracks user movement.
- **Floating Mobile Experience**: A mobile-optimized floating navigation bar with glassmorphism effects.
- **Smart Food Menu**: Standardized, high-quality food item cards with 3-line text truncation and consistent image aspect ratios.
- **JWT Authentication**: Secure user login and signup with password hashing.
- **Stripe Payment Integration**: Seamless and secure online payment processing.
- **Role-Based Access**: Specialized views for Users and Admin panel with restricted API access.
- **Order Management**: Real-time order tracking and status updates.
- **Products Management**: Dynamic admin panel for adding, removing, and updating food items.
- **Cart Protection**: Intelligent login-gate that prevents guest checkouts to ensure data security.

## Screenshots

![Hero Section](https://i.ibb.co/59cwY75/food-hero.png)
- **Modern Hero Section**: Featuring responsive layout and optimized branding.

![Products Grid](https://i.ibb.co/JnNQPyQ/food-products.png)
- **Standardized Food Grid**: Every item card maintains perfect alignment.

![Floating Mobile Menu](https://i.ibb.co/t2LrQ8p/food-cart.png)
- **Mobile Floating Navigation**: Premium one-handed navigation for mobile devices.

## Run Locally

Clone the project
```bash
    git clone https://github.com/Thrishal1105/SwiftBite_Food_Delivery.git
```
Go to the project directory
```bash
    cd Food-Dv
```
Install dependencies (Frontend)
```bash
    cd frontend
    npm install
```
Install dependencies (Admin)
```bash
    cd admin
    npm install
```
Install dependencies (Backend)
```bash
    cd backend
    npm install
```
Setup Environment Variables
Create a `.env` file in the `backend` folder:
```env
  MONGO_URL=YOUR_MONGODB_ATLAS_URL
  JWT_SECRET=YOUR_SECRET_TOKEN
  STRIPE_SECRET_KEY=YOUR_STRIPE_KEY
  FRONTEND_URL=http://localhost:5173
```
Setup the Frontend and Admin URL
- `frontend/src/context/StoreContext.jsx`: Set `VITE_BACKEND_URL` in environment variables.
- `admin/src/assets/assets.js`: Set `VITE_BACKEND_URL` in environment variables.

Start the servers
```bash
    # Backend
    cd backend && npm start
    
    # Frontend
    cd frontend && npm run dev
    
    # Admin
    cd admin && npm run dev
```

## Tech Stack
* [React.js](https://reactjs.org/) - Frontend framework
* [Tailwind CSS](https://tailwindcss.com/) - Modern utility-first styling
* [Framer Motion](https://www.framer.com/motion/) - Professional web animations
* [Node.js](https://nodejs.org/en) - Backend runtime
* [Express.js](https://expressjs.com/) - Web application framework
* [MongoDB Atlas](https://www.mongodb.com/) - Cloud database
* [Stripe](https://stripe.com/) - Payment gateway
* [JWT](https://jwt.io/) - Secure authentication

## Deployment

The application is fully deployed and production-ready:
- **Backend**: Hosted on [Render](https://render.com/) (Web Service).
- **Frontend & Admin**: Hosted on [Vercel](https://vercel.com/) (Static Site).

## Contributing

Contributions are always welcome! Feel free to raise an issue or submit a pull request to improve the SwiftBite experience.

## Feedback

If you have any feedback or suggestions, please reach out to me!
