"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface GalleryItem {
  before: string;
  after: string;
  title: string;
  category: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      before:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Kitchen",
      category: "Kitchen",
    },
    {
      before:
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Luxury Bathroom",
      category: "Bathroom",
    },
    {
      before:
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Living Room",
      category: "Living Space",
    },
    {
      before:
        "https://images.pexels.com/photos/1580467/pexels-photo-1580467.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hardwood Flooring",
      category: "Flooring",
    },
    {
      before:
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Master Bedroom",
      category: "Bedroom",
    },
    {
      before:
        "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800",
      after:
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Custom Cabinetry",
      category: "Kitchen",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full backdrop-blur-xl bg-pink-500/10 border border-pink-500/20 mb-6">
            <span className="text-sm font-semibold text-pink-600">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transformation Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the remarkable before-and-after journeys of homes we've
            transformed. Each project tells a unique story of vision,
            craftsmanship, and excellence.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className="group relative backdrop-blur-xl bg-white/80 border border-gray-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={item.before}
                      alt={`${item.title} before renovation`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-xl bg-black/40 text-white text-xs font-semibold rounded-full">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={item.after}
                      alt={`${item.title} after renovation`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 backdrop-blur-xl bg-white/90 text-gray-900 text-xs font-semibold rounded-full">
                      After
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  onClick={() => setSelectedImage(item.after)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 backdrop-blur-xl bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ZoomIn size={24} className="text-gray-900" />
                </button>
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-3">
                  <span className="text-xs font-semibold text-gray-700">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery item enlarged view"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
