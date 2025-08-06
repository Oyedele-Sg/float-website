"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Download Applicaton",
    description: "Get app from appstore",
    phone: "download",
  },
  {
    step: 2,
    title: "Sign up",
    description: "Flll in your informaton",
    phone: "register",
  },
  {
    step: 3,
    title: "Send",
    description: "Start sending",
    phone: "send",
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

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const phoneVariants = {
  hidden: {
    opacity: 0,
    y: 100, // Start from below
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const phoneContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delay between each phone
      delayChildren: 0.2,
    },
  },
};

const BankingMadeEasy = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Banking Made Easy
        </motion.h2>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Process Timeline */}
          <motion.div className="relative" variants={stepVariants}>
            <div className="flex items-center justify-between max-w-4xl mx-auto   ">
              {/* Light Blue Dotted Line Above */}

              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-red-600 z-0"></div>

              {steps.map((step) => (
                <div
                  key={step.step}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Step Circle - Plain Red Circle */}
                  <div className="w-16 h-16 bg-[#B3261E] rounded-full border-[2px] border-[#e8defb] mb-4 flex items-center justify-center ">
                    {" "}
                    <div className=" bg-white w-[20px] h-[20px] rounded-full "></div>{" "}
                  </div>

                  {/* Step Text */}
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2 text-[#B3261E]">
                      {step.title}
                    </h3>
                    <p className="text-[#B3261E] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            className=" flex flex-col md:flex-row gap-8 "
            variants={phoneContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Phone 1 - Download App */}
            <motion.div
              className="flex-1 flex flex-col justify-center "
              variants={phoneVariants}
            >
              <div className="relative w-full h-[500px] ">
                <Image
                  src="/assets/images/info/install.png"
                  alt="install"
                  fill
                  className=" object-contain"
                />
              </div>
            </motion.div>

            {/* Phone 2 - Register */}
            <motion.div
              className="flex-1 flex flex-col justify-center "
              variants={phoneVariants}
            >
              <div className="relative w-full h-[500px] ">
                <Image
                  src="/assets/images/info/register.png"
                  alt="register"
                  fill
                  className=" object-contain"
                />
              </div>
            </motion.div>

            {/* Phone 3 - Send Money */}
            <motion.div
              className="flex-1 flex flex-col justify-center "
              variants={phoneVariants}
            >
              <div className="relative w-full h-[500px] ">
                <Image
                  src="/assets/images/info/send.png"
                  alt="send"
                  fill
                  className=" object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BankingMadeEasy;
