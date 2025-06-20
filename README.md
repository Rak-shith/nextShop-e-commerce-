# 🛍️ nextShop-e-commerce

A modern, full-featured E-commerce web application built using **Next.js App Router**, **Tailwind CSS**, **NextAuth.js**, and **Context API**.

---

## 🚀 Features

- 🧾 Product listing with detail pages
- 🛒 Add to cart & wishlist (with context state)
- ✅ Checkout simulation
- 🔐 User authentication using **NextAuth.js**
- 🧑 Responsive mobile-first UI
- 💾 API routes with app directory support

---

## 🧱 Tech Stack

| Tech             | Purpose                            |
|------------------|------------------------------------|
| Next.js 15       | Full-stack React framework         |
| App Router       | File-based routing + layouts       |
| Tailwind CSS     | Utility-first modern styling       |
| Context API      | Cart/Wishlist global state         |
| NextAuth.js      | Authentication provider            |
| Vercel           | Hosting and deployment             |

---

## 📁 Project Structure

nextShop-e-commerce/
├── app/
│ ├── page.jsx # Home
│ ├── login/page.jsx # Login
│ ├── register/page.jsx # Register
│ ├── cart/page.jsx # Cart
│ ├── wishlist/page.jsx # Wishlist
│ ├── checkout/page.jsx # Checkout
│ ├── products/[id]/page.jsx# Product detail
│ └── api/ # API Routes
├── components/ # Reusable UI components
├── context/ # Cart/Wishlist Context
├── lib/ # Helper functions
├── public/images/ # Product images
├── styles/ # Tailwind + global styles
├── .env.example # Sample environment config
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md

---

## 🛠️ Setup Instructions

### 1. Clone the Project

git git@github.com:Rak-shith/nextShop-e-commerce-.git
cd nextShop-e-commerce

### 2. Clone the Project

npm install

### 3. Environment Variables

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

### 4. Run the Development Server

npm run dev
Now visit http://localhost:3000 🚀

### 5. Build for Production

npm run build
npm run start

---

## 👨‍💻 Deployment

Deployed via Vercel. Compatible out of the box.
link - https://next-shop-e-commerce-nine.vercel.app/

---

You’re all set! 💼

