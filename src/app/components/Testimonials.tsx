const Testimonials = () => (
  <section className="py-10 px-4 max-w-4xl mx-auto text-center">
    <h5 className="text-xl font-semibold mb-6">Our Clients Love Us</h5>
    <p className="mb-4 text-gray-600">Trusted. Tested. Recommended.</p>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <div className="bg-gray-100 rounded-lg p-4 flex-1">
        <p className="text-sm mb-2">
          &ldquo;Float made my international transfer so easy and quick! Highly
          recommended.&rdquo;
        </p>
        <span className="text-xs text-gray-500">- Client A</span>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 flex-1">
        <p className="text-sm mb-2">
          &ldquo;Excellent rates and fantastic support. I trust Float for all my
          transfers.&rdquo;
        </p>
        <span className="text-xs text-gray-500">- Client B</span>
      </div>
    </div>
  </section>
);

export default Testimonials;
