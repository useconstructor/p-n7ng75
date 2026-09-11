'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Menu, X, Utensils, Clock, Leaf, Star, MapPin,
  ChevronRight, Smartphone, Users, Gift, CheckCircle,
  Truck, Salad, PieChart, Recycle, Phone, Mail,
  Instagram, Facebook, Twitter, ChevronLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// ============================================
// SECTION 1: STICKY NAV
// ============================================
function StickyNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Plans', href: '#pricing' },
    { label: 'Locations', href: '#locations' },
    { label: 'Catering', href: '#catering' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E85D1F] rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-[#2C2C2C]">FastServe</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B6B6B] hover:text-[#E85D1F] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18005555555" className="text-[#6B6B6B] hover:text-[#E85D1F] transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <Button
              className="bg-[#E85D1F] hover:bg-[#d14f17] text-white font-semibold tracking-wide uppercase text-sm"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2C2C2C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C2C2C]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-medium text-[#2C2C2C] hover:text-[#E85D1F] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-[#E85D1F] hover:bg-[#d14f17] text-white font-semibold tracking-wide uppercase text-sm mt-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms' }}
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================
// SECTION 2: HERO SPLIT
// ============================================
function HeroSplit() {
  return (
    <section id="hero" className="pt-16 min-h-screen bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Image - Left on desktop */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative bg-[#C8D5C4] rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/hero.png"
                alt="Fresh grain bowl with chicken, quinoa, roasted vegetables, and tahini drizzle"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E85D1F] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2C2C2C] font-display">7 min</p>
                  <p className="text-[#6B6B6B] text-sm">Avg. pickup time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right on desktop */}
          <div className="order-1 lg:order-2 flex flex-col justify-center py-12 lg:py-0">
            <Badge className="w-fit mb-4 bg-[#C8D5C4] text-[#2C2C2C] hover:bg-[#C8D5C4]">
              Fresh Daily • Never Frozen
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] font-display leading-tight mb-6">
              Cravings, Solved in 7 Minutes
            </h1>
            <p className="text-lg sm:text-xl text-[#6B6B6B] mb-8 leading-relaxed">
              Fresh, customizable meals built your way—order online, pick up, or get it delivered. Real ingredients, real fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#E85D1F] hover:bg-[#d14f17] text-white font-semibold tracking-wide uppercase text-sm px-8 h-14"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Order Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white font-semibold tracking-wide uppercase text-sm px-8 h-14"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3: STATS BANNER (Trust Bar)
// ============================================
function StatsBanner() {
  const stats = [
    { icon: Utensils, value: '847K+', label: 'Orders This Year' },
    { icon: Clock, value: '99.2%', label: 'On Time Guarantee' },
    { icon: Leaf, value: '100%', label: 'Fresh Ingredients' },
    { icon: Star, value: '4.8★', label: '12,400+ Reviews' },
    { icon: MapPin, value: '30+', label: 'Locations' },
  ]

  return (
    <section className="bg-[#2C2C2C] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-6 h-6 text-[#E85D1F] mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</p>
              <p className="text-[#9CA3AF] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 4: SERVICES CARDS
// ============================================
function ServicesCards() {
  const services = [
    {
      icon: Smartphone,
      title: 'Order Online, Pick Up in 7 Minutes',
      description: 'Browse menu, customize bowl, pay, done. Our app shows you a live ETA so you never wait.',
      cta: 'Download App',
      href: '#cta',
    },
    {
      icon: Users,
      title: 'Catering for Your Team',
      description: 'Feed 10 to 500 people seamlessly. Corporate lunches, office parties, events—we handle the logistics.',
      cta: 'Request Quote',
      href: '#catering',
    },
    {
      icon: Gift,
      title: 'Loyalty Rewards',
      description: 'Earn 1 point per $1 spent. Redeem for free meals, exclusive ingredients, and VIP perks.',
      cta: 'Join Free',
      href: '#pricing',
      progress: 65,
    },
  ]

  return (
    <section id="catering" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] font-display mb-4">
            More Than Just Fast Food
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Whether you need a quick lunch, catering for your team, or want to save with a meal plan—we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#F9F7F3] group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-[#E85D1F]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#E85D1F] transition-colors">
                  <service.icon className="w-7 h-7 text-[#E85D1F] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-[#2C2C2C] font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] mb-6">{service.description}</p>
                {service.progress && (
                  <div className="mb-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E85D1F] rounded-full transition-all duration-1000"
                        style={{ width: `${service.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#6B6B6B] mt-2">{service.progress}% to your next reward</p>
                  </div>
                )}
                <a
                  href={service.href}
                  className="inline-flex items-center text-[#E85D1F] font-semibold hover:underline"
                >
                  {service.cta}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 5: FEATURES BENTO
// ============================================
function FeaturesBento() {
  const features = [
    {
      icon: Truck,
      title: 'Always Fresh',
      description: 'Daily ingredient sourcing from local farms. No freezers, no preservatives, no compromises.',
      large: true,
    },
    {
      icon: Salad,
      title: 'Fully Customizable',
      description: 'Build your perfect bowl with our ingredient toggles. Swap proteins, add extras, adjust portions.',
      large: false,
    },
    {
      icon: PieChart,
      title: 'Nutritionally Transparent',
      description: 'Every menu item shows complete macro breakdown—protein, carbs, fat, and calories.',
      large: false,
    },
    {
      icon: Recycle,
      title: 'Sustainably Sourced',
      description: 'Compostable packaging, carbon-neutral delivery, and partnerships with regenerative farms.',
      large: true,
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-[#C8D5C4] text-[#2C2C2C] hover:bg-[#C8D5C4]">
            The FastServe Difference
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] font-display">
            Why FastServe?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow ${
                feature.large ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="w-12 h-12 bg-[#C8D5C4] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#2C2C2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] font-display mb-2">{feature.title}</h3>
              <p className="text-[#6B6B6B]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-12 rounded-3xl overflow-hidden">
          <Image
            src="/images/feature.png"
            alt="Fresh ingredients and sustainable packaging at FastServe"
            width={1200}
            height={500}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 6: MENU CATEGORIES
// ============================================
function MenuCategories() {
  const categories = [
    {
      name: 'Signature Bowls',
      items: [
        { name: 'Teriyaki Chicken Bowl', description: 'Grilled chicken, jasmine rice, edamame, pickled ginger, sesame', price: 'From $12.95' },
        { name: 'Mediterranean Falafel', description: 'Crispy falafel, quinoa, hummus, cucumber, tzatziki', price: 'From $11.95' },
        { name: 'Spicy Korean BBQ', description: 'Bulgogi beef, kimchi, rice, sesame greens, gochujang', price: 'From $14.95' },
        { name: 'Harvest Veggie', description: 'Roasted sweet potato, kale, chickpeas, tahini, pomegranate', price: 'From $10.95' },
      ],
    },
    {
      name: 'Build Your Own',
      items: [
        { name: 'Base', description: 'White rice, brown rice, quinoa, mixed greens, or half & half', price: 'Included' },
        { name: 'Protein', description: 'Chicken, steak, salmon, tofu, falafel, or double protein', price: 'From $4' },
        { name: 'Toppings', description: 'Choose 4 from 20+ fresh veggies, pickles, and crunchy add-ons', price: 'Included' },
        { name: 'Sauce', description: 'Tahini, gochujang, chimichurri, sriracha aioli, or house vinaigrette', price: 'Included' },
      ],
    },
    {
      name: 'Wraps & Sides',
      items: [
        { name: 'Any Bowl as a Wrap', description: 'Your favorite bowl wrapped in a warm flour tortilla', price: '+$1' },
        { name: 'Crispy Pita Chips', description: 'House-made with za\'atar seasoning', price: '$3.95' },
        { name: 'Seasonal Soup', description: 'Ask about today\'s fresh batch', price: '$4.95' },
        { name: 'Fresh Fruit Cup', description: 'Seasonal selection, locally sourced', price: '$3.50' },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="menu" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] font-display mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Every bowl is made fresh when you order. Customize anything to fit your cravings and dietary needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all ${
                activeCategory === index
                  ? 'bg-[#E85D1F] text-white'
                  : 'bg-[#F9F7F3] text-[#6B6B6B] hover:bg-[#C8D5C4]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-5 sm:p-6 bg-[#F9F7F3] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <h4 className="text-lg font-bold text-[#2C2C2C] font-display mb-1">{item.name}</h4>
                <p className="text-[#6B6B6B] text-sm">{item.description}</p>
              </div>
              <span className="text-[#E85D1F] font-semibold ml-4 whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#6B6B6B] mb-4">Prices vary by location. Nutritional info available on request.</p>
          <Button
            size="lg"
            className="bg-[#E85D1F] hover:bg-[#d14f17] text-white font-semibold tracking-wide uppercase text-sm"
            onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Find a Location
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 7: PRICING CARDS
// ============================================
function PricingCards() {
  const plans = [
    {
      name: 'Essentials',
      price: '$89',
      period: '/month',
      description: 'Perfect for regular lunch-goers',
      features: [
        '8 meals per month, any size',
        'Valid for 30 days',
        'Priority app ordering',
        '10% catering discount',
        'Access to secret menu items',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Plus',
      price: '$149',
      period: '/month',
      description: 'For the daily FastServe fan',
      features: [
        '16 meals per month',
        'Priority pickup lanes',
        'Free delivery over $15',
        'Exclusive seasonal ingredients',
        'Quarterly bonus rewards',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Pro',
      price: '$249',
      period: '/month',
      description: 'Unlimited meals, unlimited perks',
      features: [
        'Unlimited meals (1 per day)',
        'VIP parking at all locations',
        '1 free catering order (up to 50 people)',
        'Concierge meal planning',
        'Lifetime 20% catering discount',
      ],
      cta: 'Go Pro',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-[#E85D1F] text-white hover:bg-[#E85D1F]">
            Save More, Eat Better
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Monthly Meal Plans
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lock in savings with a monthly subscription. Skip the checkout line, access exclusive perks, and never worry about lunch again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 ${
                plan.popular
                  ? 'bg-[#E85D1F] text-white scale-105'
                  : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#2C2C2C] text-white">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className={`text-xl font-display ${plan.popular ? 'text-white' : 'text-[#2C2C2C]'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className={`text-5xl font-bold font-display ${plan.popular ? 'text-white' : 'text-[#2C2C2C]'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-white/80' : 'text-[#6B6B6B]'}>{plan.period}</span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-white/80' : 'text-[#6B6B6B]'}`}>
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#E85D1F]'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-[#6B6B6B]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold tracking-wide uppercase text-sm ${
                    plan.popular
                      ? 'bg-white text-[#E85D1F] hover:bg-gray-100'
                      : 'bg-[#E85D1F] text-white hover:bg-[#d14f17]'
                  }`}
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 8: TESTIMONIALS CAROUSEL
// ============================================
function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "I grab lunch here 3x a week. Their chicken teriyaki bowl tastes like home cooking, but I'm eating at my desk by 12:15pm.",
      name: 'Marcus Chen',
      role: 'Account Executive',
      company: 'TechVenture Inc.',
      initials: 'MC',
    },
    {
      quote: "Finally a fast food place that doesn't make me feel guilty about my meal choices. Everything is calorie-counted and real.",
      name: 'Sarah Mitchell',
      role: 'Fitness Coach',
      company: 'CoreFit Studios',
      initials: 'SM',
    },
    {
      quote: "We've catered 8 company events with FastServe. The team arrives on time, food is hot, and employees actually rave about it.",
      name: 'David Torres',
      role: 'HR Director',
      company: 'McKnight Consulting',
      initials: 'DT',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-24 bg-[#C8D5C4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] font-display mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#E85D1F] fill-[#E85D1F]" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-[#2C2C2C] text-center mb-8 font-medium leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E85D1F] flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonials[currentIndex].initials}
              </div>
              <p className="font-bold text-[#2C2C2C] font-display">{testimonials[currentIndex].name}</p>
              <p className="text-[#6B6B6B]">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#F9F7F3] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#2C2C2C]" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#E85D1F]' : 'bg-white'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#F9F7F3] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#2C2C2C]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 9: LOCATIONS MAP
// ============================================
function LocationsMap() {
  const locations = [
    { city: 'New York', count: 8, areas: 'Manhattan, Brooklyn, Queens' },
    { city: 'Los Angeles', count: 6, areas: 'Downtown, Santa Monica, Pasadena' },
    { city: 'Chicago', count: 5, areas: 'Loop, Lincoln Park, Wicker Park' },
    { city: 'Austin', count: 4, areas: 'Downtown, South Congress, Domain' },
    { city: 'San Francisco', count: 4, areas: 'Financial District, Mission, Marina' },
    { city: 'Seattle', count: 3, areas: 'Downtown, Capitol Hill, Bellevue' },
  ]

  return (
    <section id="locations" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge className="mb-4 bg-[#C8D5C4] text-[#2C2C2C] hover:bg-[#C8D5C4]">
              30+ Locations Nationwide
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] font-display mb-6">
              Find Your FastServe
            </h2>
            <p className="text-lg text-[#6B6B6B] mb-8">
              With locations across major cities, fresh food is never far away. Each location features mobile ordering, pickup lanes, and dine-in seating.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#F9F7F3] rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-[#E85D1F]" />
                    <span className="font-bold text-[#2C2C2C] font-display">{location.city}</span>
                    <Badge className="ml-auto bg-[#E85D1F] text-white text-xs">{location.count}</Badge>
                  </div>
                  <p className="text-sm text-[#6B6B6B]">{location.areas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Fast+Casual+Restaurant+New+York&output=embed"
              className="w-full h-80 lg:h-[500px]"
              allowFullScreen
              loading="lazy"
              title="FastServe locations map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 10: CTA FULL
// ============================================
function CTAFull() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact',
            ...formData,
          }),
        }
      )

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="py-20 sm:py-24 bg-[#E85D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              Ready to Eat Better, Faster?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Download the FastServe app for the fastest ordering experience. First order is 20% off when you sign up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#2C2C2C] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="w-6 h-6" />
                Download for iOS
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2C2C2C] text-white px-6 py-4 rounded-xl font-semibold hover:bg-black transition-colors"
              >
                <Smartphone className="w-6 h-6" />
                Download for Android
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#2C2C2C] font-display mb-2">Message Sent!</h3>
                <p className="text-[#6B6B6B]">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#2C2C2C] font-display mb-2">Get In Touch</h3>
                <p className="text-[#6B6B6B] mb-6">Questions about catering, partnerships, or locations? Drop us a line.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-[#F9F7F3] border-0"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-[#F9F7F3] border-0"
                  />
                  <Textarea
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-[#F9F7F3] border-0"
                  />
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#E85D1F] hover:bg-[#d14f17] text-white font-semibold tracking-wide uppercase"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 11: FOOTER FULL
// ============================================
function FooterFull() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#hero' },
      { label: 'Careers', href: 'https://careers.fastserve.com', external: true },
      { label: 'Press', href: 'mailto:press@fastserve.com', external: true },
      { label: 'Sustainability', href: '#features' },
    ],
    customers: [
      { label: 'Menu', href: '#menu' },
      { label: 'Locations', href: '#locations' },
      { label: 'Meal Plans', href: '#pricing' },
      { label: 'Catering', href: '#catering' },
    ],
    support: [
      { label: 'Contact Us', href: '#cta' },
      { label: 'FAQs', href: 'mailto:help@fastserve.com', external: true },
      { label: 'Nutrition Info', href: '#menu' },
      { label: 'Gift Cards', href: '#pricing' },
    ],
  }

  return (
    <footer className="bg-[#2C2C2C] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#E85D1F] rounded-full flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">FastServe</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Fresh, customizable meals in 7 minutes or less. Because you deserve better than typical fast food.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E85D1F] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E85D1F] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E85D1F] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display mb-4">Customers</h4>
            <ul className="space-y-3">
              {footerLinks.customers.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FastServe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:legal@fastserve.com" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="mailto:legal@fastserve.com" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main>
      <StickyNav />
      <HeroSplit />
      <StatsBanner />
      <ServicesCards />
      <FeaturesBento />
      <MenuCategories />
      <PricingCards />
      <TestimonialsCarousel />
      <LocationsMap />
      <CTAFull />
      <FooterFull />
    </main>
  )
}
