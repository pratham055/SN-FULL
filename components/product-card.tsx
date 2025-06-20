"use client"

import Image from "next/image"
import { useState } from "react"
import type { Product } from "@/lib/types"
import ProductModal from "./product-modal"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{product.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      <ProductModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
