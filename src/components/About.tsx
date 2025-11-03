import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Typed variants for fade and stagger
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering superior quality in every project",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Skilled professionals with decades of combined experience",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparency and honest communication",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern techniques and cutting-edge solutions",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full backdrop-blur-xl bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm font-semibold text-blue-600">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafting Exceptional Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Sophos Home Improvements has been at the forefront
            of residential transformation, delivering unparalleled craftsmanship
            and design excellence.
          </p>
        </motion.div>

        {/* Image + Mission / Why Choose Us */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeUp} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <img
              src="https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional home renovation team"
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div
              variants={fadeUp}
              className="backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe every home tells a story. Our mission is to help you
                write yours through thoughtful renovations, meticulous inspections,
                and transformative remodeling that reflects your unique style and
                enhances your daily life.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From initial consultation to final walkthrough, we prioritize clear
                communication, attention to detail, and your complete satisfaction.
                Our team brings passion, precision, and professionalism to every
                square foot.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group backdrop-blur-xl bg-white/60 border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
