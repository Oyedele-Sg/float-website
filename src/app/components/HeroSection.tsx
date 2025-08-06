"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="w-full bg-white text-gray-900 pt- pb-[96px] px-4 relative overflow-hidden">
    <div className="container mx-auto flex justify-between items-center min-h-[600px]">
      {/* Left Section - Marketing Text */}
      <motion.div
        className="flex-1 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          The Smarter Way to Move Money Across Borders
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Get more control, more value, and more peace of mind for all
          international money transfers.
        </motion.p>

        {/* Download App Section */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <span className="text-gray-700 font-medium">Download App Now</span>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/assets/qrCode.png"
              alt="QR Code"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section - Mobile App Interface */}
      <motion.div
        className="relative w-full max-w-[437px] h-[600px] flex-shrink-0"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <Image
            src="/assets/images/hero-mockup.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
