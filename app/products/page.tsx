import type { Metadata } from "next"
import ProductCard from "@/components/product-card"
import { foundryMaterials, foundryChaplets, industrialMachinery } from "@/lib/products-data"

export const metadata: Metadata = {
  title: "Products - S.N Enterprises",
  description:
    "Explore our comprehensive range of foundry materials, chaplets, and industrial machinery at S.N Enterprises.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Products</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              S.N Enterprises offers a comprehensive range of high-quality foundry materials, chaplets, and industrial
              machinery to meet all your manufacturing needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Foundry Materials Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Foundry Materials</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality materials for all your foundry operations, ensuring optimal performance and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foundryMaterials.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Foundry Chaplets Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Foundry Chaplets</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Standard and custom chaplets designed to meet your specific casting requirements with precision and
              durability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foundryChaplets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Industrial Machinery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Industrial Machinery</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced machinery solutions to enhance your production efficiency and maintain the highest quality
              standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industrialMachinery.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Need Custom Solutions?</h2>
            <p className="mt-4 text-xl text-blue-100">Contact us for custom products and specialized requirements.</p>
            <div className="mt-8">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
