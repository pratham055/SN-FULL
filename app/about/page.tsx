import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Wrench, Shield, Users, Award, Clock, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
              Industrial Excellence Since 1993
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="text-blue-400">S.N Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A trusted leader in foundry materials, custom-sized chaplets, and industrial machinery. We've been
              powering industrial operations with precision-engineered solutions and uncompromising quality for over
              three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">30+</h3>
                <p className="text-gray-600 font-medium">Years of Industry Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Industrial Clients Served</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Quality Assurance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1993, S.N Enterprises began as a small foundry materials supplier with a vision to provide
                  unmatched quality and service to the industrial sector. Over the past three decades, we have evolved
                  into a comprehensive industrial solutions provider.
                </p>
                <p>
                  Our expertise spans foundry materials, precision-engineered custom-sized chaplets, and
                  state-of-the-art industrial machinery. We understand that every industrial operation is unique, which
                  is why we specialize in tailored solutions that meet the exact specifications of our clients.
                </p>
                <p>
                  Today, S.N Enterprises stands as a testament to consistent quality, innovative solutions, and
                  unwavering commitment to our clients' success.
                </p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Specializations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Factory className="w-6 h-6 text-blue-400" />
                  <span>Premium Foundry Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-blue-400" />
                  <span>Custom-Sized Chaplets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span>Industrial Machinery Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by excellence, guided by integrity, and committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product undergoes rigorous testing to ensure it meets the
                  highest industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Customer-Centric</h3>
                <p className="text-gray-600">
                  Our clients' success is our success. We build lasting partnerships through exceptional service and
                  tailored solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously invest in new technologies and processes to deliver cutting-edge solutions for
                  evolving industrial needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Teaser Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how S.N Enterprises can provide the industrial solutions your business needs to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@snenterprises.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Industrial Area, Mumbai</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
