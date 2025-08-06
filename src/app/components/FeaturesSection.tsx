import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/features/currency.svg",
    title: "Currency Exchange",
    description:
      "Easily convert currencies with real-time exchange rates, ensuring you get the most up-to-date value for your money.",
  },
  {
    icon: "/assets/icons/features/money.svg",
    title: "Money Transfer",
    description:
      "Send money quickly and securely to friends, family, and businesses around the world with low fees and transparent pricing.",
  },
  {
    icon: "/assets/icons/features/phone.svg",
    title: "E-wallet",
    description:
      "Securely store your funds in your FloatTransfer e-wallet, allowing for easy access and management of your money.",
  },
  {
    icon: "/assets/icons/features/phone.svg",
    title: "Mobile Top-up",
    description:
      "Conveniently top up mobile phones for yourself or others in various countries, staying connected with loved ones and business partners.",
  },
  {
    icon: "/assets/icons/features/bank.svg",
    title: "Multi-Currency Transfer",
    description:
      "Easily send and receive funds n different currencies, with automatic conversions at competitive rates for seamless global transactions.",
  },
  {
    icon: "/assets/icons/features/shield-tick.svg",
    title: "Enhanced Security",
    description:
      "Your transactions and data are protectedwith advanced encryption and multi-layer authentication, ensuring maximum safty and peace of mind.",
  },
];

const FeaturesSection = () => (
  <section className="py-10  flex flex-col items-center bg-gradient-to-b from-[#FF0000] to-[#050201]">
    <div className=" max-w-5xl mx-auto flex flex-col items-center ">
      <div className="text-[14px] font-bold border border-[#E9D7FE] mb-2 px-4 py-2 rounded-full text-white  text-center ">
        Features
      </div>
      <h2 className="text-2xl md:text-[36px] font-semibold mb-2 text-center text-white">
        Key Features
      </h2>
      <p className="mb-8 text-white text-center max-w-2xl">
        FloatTransfer is designed to make international money transfers simple,
        secure, and affordable. Our app offers a range of features to meet your
        global financial needs:
      </p>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col  gap-5        bg-white  p-4"
            >
              <div className=" border border-[#B3261E] rounded-lg p-2 self-start ">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg mt-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
