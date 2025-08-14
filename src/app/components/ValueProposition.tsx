"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ValueProposition = () => (
  <section className="w-full bg-white px-4">
    <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
      {/* Left Section - Mobile Phone Display */}
      <motion.div
        className="flex justify-center relative w-full h-[320px] sm:h-[420px] md:h-[537px] md:basis-[437px]"
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <Image
            src="/assets/images/about-mockup.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Right Section - About Us Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-full">
            About Us
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Every Transfer Carries a Purpose
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          Our platform simplifies cross-border money transfers enabling users to
          send and receive funds internationally with minimal cost and maximum
          convenience. Send money to Nigeria, Ghana, Qatar, Ethiopia.....
        </motion.p>

        <motion.div
          className="flex items-center justify-center md:justify-start gap-2 text-purple-600 font-medium cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </motion.div>

        {/* Country Flags */}
        <motion.div
          className="flex items-center justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          {["QA", "ET", "GH", "NG"].map((country, index) => (
            <motion.div
              key={country}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.4 + index * 0.1,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={`/assets/logo/${country}.png`}
                alt={country}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ValueProposition;
