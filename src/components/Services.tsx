"use client";

import { motion, Variants } from "framer-motion";
import {
  Home,
  ClipboardCheck,
  PaintBucket,
  Hammer,
  Wrench,
  Sparkles,
} from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Renovations",
      description:
        "Complete home transformations that breathe new life into your space. From concept to completion, we handle every detail with precision and care.",
      features: [
        "Full Home Makeovers",
        "Room Additions",
        "Structural Changes",
        "Modern Updates",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ClipboardCheck,
      title: "Home Inspections",
      description:
        "Comprehensive property evaluations to protect your investment. Our thorough inspections identify issues before they become problems.",
      features: [
        "Pre-Purchase Inspections",
        "Safety Assessments",
        "Maintenance Reviews",
        "Detailed Reports",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: PaintBucket,
      title: "Kitchen & Bath Remodeling",
      description:
        "Transform your most-used spaces into stunning, functional areas. Expert design and installation for kitchens and bathrooms that impress.",
      features: [
        "Custom Cabinetry",
        "Modern Fixtures",
        "Tile Work",
        "Layout Optimization",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Hammer,
      title: "Flooring Solutions",
      description:
        "Premium flooring installation and restoration services. Choose from hardwood, tile, laminate, and more for a foundation of beauty.",
      features: [
        "Hardwood Installation",
        "Tile & Stone",
        "Refinishing",
        "Custom Designs",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Wrench,
      title: "Custom Carpentry",
      description:
        "Bespoke woodwork that adds character and functionality. Built-ins, trim work, and custom pieces crafted to perfection.",
      features: [
        "Built-in Shelving",
        "Crown Molding",
        "Custom Furniture",
        "Trim & Millwork",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Interior Design Consulting",
      description:
        "Professional guidance to bring your vision to life. Color selection, material choices, and spatial planning for cohesive results.",
      features: [
        "Color Consultation",
        "Material Selection",
        "Space Planning",
        "Style Guidance",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#0a0f1c] via-[#0d1220] to-[#111827]"
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[36rem] h-[36rem] bg-blue-500/15 rounded-full blur-[220px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/15 rounded-full blur-[240px]"></div>
        <div className="absolute top-[30%] left-[-10%] w-[30rem] h-[30rem] bg-pink-500/15 rounded-full blur-[200px]"></div>
        <div className="absolute top-[25%] right-[-10%] w-[34rem] h-[34rem] bg-purple-500/15 rounded-full blur-[210px]"></div>
        <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-cyan-400/15 rounded-full blur-[260px]"></div>
        <div className="absolute top-[55%] left-[15%] w-[14rem] h-[14rem] bg-pink-400/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-[20%] right-[25%] w-[12rem] h-[12rem] bg-blue-400/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[30%] right-[40%] w-[10rem] h-[10rem] bg-purple-400/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full backdrop-blur-xl bg-blue-500/10 border border-blue-400/20 mb-6">
            <span className="text-sm font-semibold text-blue-300">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From minor updates to major transformations, we offer a complete
            range of services to make your home everything you've imagined.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="group relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <button className="text-sm font-semibold text-blue-300 hover:text-blue-400 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
