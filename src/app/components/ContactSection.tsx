import Image from "next/image";

const ContactSection = () => (
  <section
    id="contact"
    className="py-10 px-4 max-w-6xl mx-auto flex flex-col gap-8"
  >
    {/* Still have questions box */}
    <div className="w-full flex justify-center mb-8">
      <div className="bg-[#F9FAFB] border border-dashed border-[#B3261E] rounded-lg px-6 py-4 max-w-xl w-full text-center">
        <div className="font-semibold mb-1">Still have questions?</div>
        <div className="text-gray-700 text-sm">
          Can&apos;t find the answer you&apos;re looking for? Please send us a
          message.
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Contact Form */}
      <form className="flex-1 bg-white rounded-lg flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-1">Contact us</h2>
        <p className="mb-4 text-gray-700">
          Our friendly team would love to hear from you.
        </p>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-[#344054]">
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="border border-[#D0D5DD] rounded px-3 py-2 w-full placeholder-[#667085]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-[#344054]">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="border border-[#D0D5DD] rounded px-3 py-2 w-full placeholder-[#667085]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-[#344054]">
            Email
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="border border-[#D0D5DD] rounded px-3 py-2 w-full placeholder-[#667085]"
          />
        </div>
        <div>
          <label
            htmlFor="country-code"
            className="block text-sm font-medium mb-1 text-[#344054]"
          >
            Phone number
          </label>
          <div className="flex gap-2">
            <select
              id="country-code"
              aria-label="Country code"
              className="border border-[#D0D5DD] rounded px-2 py-2 bg-white text-sm"
            >
              <option>US</option>
              <option>NG</option>
              <option>GH</option>
              <option>QA</option>
            </select>
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              className="border border-[#D0D5DD] rounded px-3 py-2 w-full placeholder-[#667085]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-[#344054]">
            Message
          </label>
          <textarea
            placeholder="Leave us a message..."
            className="border border-[#D0D5DD] rounded px-3 py-2 w-full min-h-[80px] placeholder-[#667085]"
          />
        </div>
        <label className="flex items-center gap-2 text-xs mb-2">
          <input type="checkbox" className="accent-red-700" />
          You agree to our friendly{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
          .
        </label>
        <button
          type="submit"
          className="bg-[#B3261E] text-white px-5 py-2 rounded font-medium hover:bg-red-800 transition w-full md:w-auto"
        >
          Send message
        </button>
      </form>
      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/assets/images/contact.png"
          alt="Contact Illustration"
          width={576}
          height={800}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
