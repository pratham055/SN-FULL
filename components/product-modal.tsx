"use client"

import Image from "next/image"
import { X } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="relative h-64 lg:h-80 lg:w-1/2 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>

              {/* Detailed Information */}
              <div className="lg:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{product.detailedInfo}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-4 p-6 border-t bg-gray-50">
            <button
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
