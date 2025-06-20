import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MessageCircle,
  Factory,
  Wrench,
  Package,
  Users,
  Award,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Enhanced Logo Space */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  {/* Dedicated Logo Container */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden border-2 border-blue-200/50 p-2">
                    {/* Your Company Logo Goes Here */}
                    <div className="w-full h-full bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="S.N Enterprises Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    {/* Premium Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">S.N ENTERPRISES</h1>
                    <p className="text-sm text-blue-600 font-semibold">Premium Foundry Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#products"
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-indigo-900/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full mb-8">
              <Star className="w-4 h-4 text-amber-500 mr-2" />
              <span className="text-sm font-medium text-blue-900">Trusted by 500+ Industries</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Foundry
              </span>
              <br />
              <span className="relative">
                Excellence
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Premium foundry materials, custom chaplets, and advanced machinery solutions engineered for precision,
              reliability, and exceptional performance in industrial applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50 rounded-full mb-6">
              <span className="text-sm font-medium text-amber-800">Our Specializations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Premium Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of foundry solutions designed to meet the most demanding industrial requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Foundry Materials */}
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Package className="h-10 w-10 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundry Materials</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Premium grade raw materials including specialized sands, advanced binders, and high-performance
                    coatings engineered for superior casting quality and consistency.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Silica Sand & Chromite Sand</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Advanced Resin Binders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Premium Coatings & Additives</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Chaplets */}
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-amber-50/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-10 w-10 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"> Foundry Chaplets</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Precision-engineered chaplets and core supports manufactured to exact specifications, ensuring optimal performance in your  casting applications.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Bespoke Design & Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Multiple Alloy Options</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">Micro-Precision Tolerances</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Machinery */}
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-emerald-50/30">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="h-10 w-10 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Machinery</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    State-of-the-art foundry equipment and machinery solutions designed for maximum efficiency,
                    reliability, and precision in modern casting operations.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{"Lathe machines"}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{"Bandsa"}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{"Milling machines"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-900">Product Gallery</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium foundry materials, custom chaplets, and advanced machinery
            </p>
          </div>

          {/* Foundry Materials Gallery */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                <Package className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Foundry Materials</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Silica Sand"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Silica Sand</h4>
                  <p className="text-sm text-gray-200">High-grade casting sand</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Resin Binders"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Resin Binders</h4>
                  <p className="text-sm text-gray-200">Advanced binding solutions</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Core Coatings"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Core Coatings</h4>
                  <p className="text-sm text-gray-200">Premium protective coatings</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Chromite Sand"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Chromite Sand</h4>
                  <p className="text-sm text-gray-200">Specialized casting material</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Chaplets Gallery */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Custom Chaplets</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Steel Chaplets"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Steel Chaplets</h4>
                  <p className="text-gray-200">Precision-engineered steel supports for complex castings</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Iron Chaplets"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Iron Chaplets</h4>
                  <p className="text-gray-200">Durable iron chaplets for heavy-duty applications</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Custom Alloy Chaplets"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Custom Alloy Chaplets</h4>
                  <p className="text-gray-200">Specialized alloy compositions for unique requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Machinery Gallery */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mr-4">
                <Factory className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Advanced Machinery</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Sand Mixer"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Sand Mixers</h4>
                  <p className="text-gray-200">High-efficiency mixing equipment</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Molding Machine"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Molding Machines</h4>
                  <p className="text-gray-200">Automated molding solutions</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Industrial Furnace"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-semibold text-xl mb-2">Industrial Furnaces</h4>
                  <p className="text-gray-200">High-temperature melting systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              View Complete Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-indigo-900/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full mb-8">
                  <span className="text-sm font-medium text-blue-900">Our Legacy</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    25 Years of
                  </span>
                  <br />
                  <span className="text-gray-900">Excellence</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Since our establishment, S.N Enterprises has been at the forefront of foundry innovation, combining
                  traditional expertise with cutting-edge technology to deliver unparalleled solutions.
                </p>

                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Our commitment to quality, precision, and customer satisfaction has made us the preferred partner for
                  leading foundries across multiple industries.
                </p>

                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-700" />
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-amber-700" />
                    </div>
                    <div className="text-3xl font-bold text-amber-700 mb-2">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-emerald-700" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-700 mb-2">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Expert Support</div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Discover Our Story
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="S.N Enterprises facility"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Journey</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your foundry operations? Connect with our experts for personalized solutions and
              competitive pricing tailored to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Phone - Opens Phone Dialer */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Link href="tel:+911234567890" className="block">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Direct Call</h3>
                  <p className="text-blue-100 mb-4">Immediate expert consultation</p>
                  <span className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">
                    +91 12345 67890
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Link href="mailto:info@snenterprises.com" className="block">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                  <p className="text-blue-100 mb-4">Detailed project discussions</p>
                  <span className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">
                    info@snenterprises.com
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* WhatsApp - Opens WhatsApp */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Link href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                  <p className="text-blue-100 mb-4">Quick support & updates</p>
                  <span className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">
                    +91 12345 67890
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-gray-900 px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Request Premium Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SN</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">S.N Enterprises</div>
                <div className="text-sm text-blue-400 font-medium">Premium Foundry Solutions</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} S.N Enterprises. All rights reserved.</p>
              <p className="text-sm text-gray-500 mt-1">Excellence in foundry solutions since 1995</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
