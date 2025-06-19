const products = [
  {
    id: 1,
    title: "Adidas Running Shoes",
    price: 3999,
    description: "Lightweight, breathable running shoes with cushioned soles for all-day comfort.",
    image: "/images/shoes.png"
  },
  {
    id: 2,
    title: "Cargo Pants - Olive Green",
    price: 2199,
    description: "Durable cotton cargo pants with multiple utility pockets and a tapered fit.",
    image: "/images/cargo-pant.png"
  },
  {
    id: 3,
    title: "White Oversized Hoodie",
    price: 1599,
    description: "Soft fleece hoodie with drop shoulders and kangaroo pockets. Perfect for cozy days.",
    image: "/images/white_hoodie.png"
  },
  {
    id: 4,
    title: "Black Hoodie Mockup",
    price: 1899,
    description: "Stylish black hoodie made from 100% organic cotton with a minimal design.",
    image: "/images/black_hoodie_mockup.png"
  },
  {
    id: 5,
    title: "LG Double Door Fridge - 260L",
    price: 28990,
    description: "Energy-efficient refrigerator with inverter compressor and auto defrost technology.",
    image: "/images/fridge.png"
  },
  {
    id: 6,
    title: "Sony Wireless Headphones",
    price: 7490,
    description: "Noise-cancelling over-ear headphones with up to 30 hours battery life and quick charge.",
    image: "/images/headphone.png"
  },
  {
    id: 7,
    title: "Dell Inspiron 15 Laptop",
    price: 58990,
    description: "15.6-inch FHD laptop with Intel i5 12th Gen, 8GB RAM, 512GB SSD, and Windows 11.",
    image: "/images/laptop.png"
  },
  {
    id: 8,
    title: "Non-stick Frying Pan - 28cm",
    price: 1299,
    description: "Induction-friendly non-stick frying pan with heat-resistant handle and glass lid.",
    image: "/images/pan.png"
  },
  {
    id: 9,
    title: "Samsung Galaxy S22",
    price: 57999,
    description: "Flagship smartphone with Dynamic AMOLED display and pro-grade camera setup.",
    image: "/images/phone-two.png"
  },
  {
    id: 10,
    title: "iPhone 14 Pro Max",
    price: 134999,
    description: "Apple's most advanced iPhone with A16 Bionic chip, always-on display, and Pro camera.",
    image: "/images/phone.png"
  },
  {
    id: 11,
    title: "Men's Tracksuit - Navy Blue",
    price: 2190,
    description: "Comfortable and stylish tracksuit made with breathable fabric for workouts and travel.",
    image: "/images/tracksuit.webp"
  },
]


export async function getAllProducts() {
  return products
}

export async function getProductById(id) {
  const product = products.find(p => p.id === Number(id))

  if (!product) return null

  return {
    ...product,
    // description: `This is ${product.title}, priced at $${product.price}.`,
  }
}
