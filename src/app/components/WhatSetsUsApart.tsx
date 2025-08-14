"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Vast Currency Options",
    description:
      "Whether you're sending or settling business payments, our wide range of global currencies",
    icon: "currency",
    bgColor: "bg-black",
    textColor: "text-white",
    iconColor: "text-white",
  },
  {
    title: "24/7 Support",
    description:
      "Got questions? We're here for you. Our dedicated support team is available 24/7 to assist you.",
    icon: "support",
    bgColor: "bg-red-100",
    textColor: "text-gray-900",
    iconColor: "text-red-600",
  },
  {
    title: "Lower Fees and Faster Transfer Times",
    description:
      "Keep more of your hard-earned money with competitive rates and lightning-fast delivery.",
    icon: "fees",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    iconColor: "text-red-600",
  },
  {
    title: "Leading on Financial Inclusion",
    description:
      "Our mission is rooted in financial inclusion. We are dedicated to helping underserved communities.",
    icon: "inclusion",
    bgColor: "bg-blue-100",
    textColor: "text-gray-900",
    iconColor: "text-red-600",
  },
  {
    title: "Smart & Human-Centered Technology",
    description:
      "With real-time tracking, you're in control, you're in control.",
    icon: "tech",
    bgColor: "bg-red-100",
    textColor: "text-gray-900",
    iconColor: "text-red-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 60,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WhatSetsUsApart = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          What Sets Us Apart
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top Row - Black card gets more space, pink card gets less */}
          <motion.div className="lg:col-span-4" variants={cardVariants}>
            <div
              className={`${features[0].bgColor} ${features[0].textColor} rounded-xl py-10 md:py-[80px] px-6 md:px-[86px] shadow-lg h-full flex flex-col md:flex-row items-center gap-6 md:gap-12`}
            >
              <div className={`${features[0].iconColor} mb-3`}>
                <Image
                  src={`/assets/images/specials/${features[0].icon}.svg`}
                  alt={features[0].title}
                  width={220}
                  height={200}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg mb-3">{features[0].title}</h3>
                <p className="text-sm opacity-90">{features[0].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={cardVariants}>
            <div
              className={`${features[1].bgColor} ${features[1].textColor} rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center`}
            >
              {/* Headset Icon with 24/7 bubble */}
              <div className={`${features[1].iconColor} mb-3 relative`}>
                <div className={`${features[0].iconColor} mb-3`}>
                  <Image
                    src={`/assets/images/specials/${features[1].icon}.svg`}
                    alt={features[1].title}
                    width={115}
                    height={115}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h3 className="font-bold text-lg">{features[1].title}</h3>
                <p className="text-sm opacity-90">{features[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row - 3 cards with equal spacing */}
          <motion.div className="lg:col-span-2" variants={cardVariants}>
            <div
              className={`${features[2].bgColor} ${features[2].textColor} rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center`}
            >
              <div className={`${features[1].iconColor} mb-3 relative`}>
                <div className={`${features[0].iconColor} mb-3`}>
                  <Image
                    src={`/assets/images/specials/${features[2].icon}.svg`}
                    alt={features[2].title}
                    width={107}
                    height={124}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="font-bold text-lg">{features[2].title}</h3>
                <p className="text-sm opacity-90">{features[2].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={cardVariants}>
            <div
              className={`${features[3].bgColor} ${features[3].textColor} rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center`}
            >
              <div className="mb-4">
                {/* People/Community Icon */}
                <div className={`${features[3].iconColor} mb-3`}>
                  <Image
                    src={`/assets/images/specials/${features[3].icon}.svg`}
                    alt={features[3].title}
                    width={175}
                    height={105}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="font-bold text-lg">{features[3].title}</h3>
                <p className="text-sm opacity-90">{features[3].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={cardVariants}>
            <div
              className={`${features[4].bgColor} ${features[4].textColor} rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center`}
            >
              <div className="mb-4">
                {/* Robot Icon */}
                <div className={`${features[4].iconColor} mb-3`}>
                  <Image
                    src={`/assets/images/specials/${features[4].icon}.svg`}
                    alt={features[4].title}
                    width={121}
                    height={132}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="font-bold text-lg">{features[4].title}</h3>
                <p className="text-sm opacity-90">{features[4].description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
