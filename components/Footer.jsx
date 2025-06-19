import React from 'react'

function Footer() {
  return (
     <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextShop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer