"use client"

import type React from "react"

import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Shield, Truck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"
    const message = "Hello S.N Enterprises, I would like to inquire about your industrial supplies and services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Navigation Header with Logo */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Small Logo Space */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SN</span>
              </div>
              <div className="text-slate-900 font-semibold text-lg">S.N Enterprises</div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-500" />
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-500" />
                info@snenterprises.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Trusted Industrial Partner Since 1995
            </div>

            {/* Logo and Company Name Section */}
            <div className="flex flex-col items-center mb-8">
              {/* Logo Placeholder */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full border-2 border-blue-400/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl md:text-2xl">SN</span>
                </div>
              </div>

              {/* Company Name */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                S.N <span className="text-blue-400">Enterprises</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your Premier Industrial Supplier & Engineering Solutions Provider
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                ISO Certified
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-blue-400" />
                Pan-India Delivery
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your industrial requirements? Our expert team is here to provide tailored solutions for
            your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Call Us</h3>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold text-lg">+91 98765 43210</p>
                <p>+91 87654 32109</p>
                <p className="text-sm text-slate-500 mt-3">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email Us</h3>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold">info@snenterprises.com</p>
                <p>sales@snenterprises.com</p>
                <p className="text-sm text-slate-500 mt-3">Response within 2 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visit Us</h3>
              <div className="text-slate-600">
                <p>Plot No. 45, Industrial Area</p>
                <p>Phase-II, Sector 28</p>
                <p>Gurgaon - 122001, Haryana</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-0 shadow-xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant WhatsApp Support</h3>
                  <p className="text-green-100 mb-6 text-lg">
                    Get immediate assistance from our technical experts. Share your requirements, get quotes, and track
                    orders instantly.
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <MessageCircle className="h-6 w-6 mr-3" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-blue-500" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Monday - Friday</span>
                  <span className="text-slate-600">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Saturday</span>
                  <span className="text-slate-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-slate-700">Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Emergency Support:</strong> Available 24/7 for critical industrial requirements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900">Send Your Inquiry</CardTitle>
              <p className="text-slate-600">
                Fill out the form below and our team will respond within 2 hours during business hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-slate-700">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter company name"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Brief subject of your inquiry"
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your requirements, specifications, quantities, or any questions you have..."
                    className="min-h-[140px] resize-none border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Inquiry
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  * Required fields. Your information is secure and will only be used to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-5"></div>
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Why Choose S.N Enterprises?</h3>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  With over 25 years of experience, we've built our reputation on quality, reliability, and exceptional
                  customer service.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Quality Assured</h4>
                  <p className="text-slate-300 text-sm">ISO certified products with comprehensive warranty coverage</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Fast Delivery</h4>
                  <p className="text-slate-300 text-sm">Same-day dispatch with pan-India delivery network</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">24/7 Support</h4>
                  <p className="text-slate-300 text-sm">Round-the-clock technical support and emergency services</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Trusted Partner</h4>
                  <p className="text-slate-300 text-sm">Serving 500+ companies across various industries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
