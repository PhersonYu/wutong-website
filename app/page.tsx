export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="w-full py-4 px-6 flex justify-between items-center border-b bg-white sticky top-0 z-50">
        <div className="font-bold text-lg tracking-wide">
          WUTONG
        </div>

        <nav className="flex gap-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Cross-Border Distribution Partner for Home Appliances in Asia
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Leveraging a dual-hub structure in Hong Kong and Singapore, we connect brands, e-commerce platforms and distribution channels across China, Hong Kong and Southeast Asia.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="mailto:phersonyu@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Contact Us
          </a>

          <a
            href="https://wa.me/6580614675"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 text-center">
        <p className="text-gray-500 mb-6">
          Trusted by major cross-border e-commerce platforms
        </p>

        <div className="flex justify-center gap-12 text-lg font-semibold text-gray-500">
          <span>Tmall Global</span>
          <span>Poizon (DEWU)</span>
          <span>Vipshop International</span>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Serving China, Hong Kong and Southeast Asia markets
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          About WUTONG
        </h2>

        <p className="text-gray-600">
          WUTONG GLOBAL COMMERCE (Singapore) and WUTONG INTERNATIONAL GROUP (Hong Kong) operate as a dual-hub cross-border trading platform focused on home appliances.
        </p>

        <p className="text-gray-600 mt-4">
          Our Hong Kong entity manages global sourcing and inventory, while our Singapore entity drives Southeast Asia market expansion, providing stable supply and efficient cross-border fulfillment.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">
              Cross-Border Distribution
            </h3>
            <p className="mt-3 text-gray-600">
              We help brands distribute products across China, Hong Kong and Southeast Asia through established e-commerce platforms.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">
              Platform Supply & Channel Access
            </h3>
            <p className="mt-3 text-gray-600">
              Direct access to major cross-border platforms including Tmall Global, Poizon and Vipshop, enabling fast market entry.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">
              Inventory & Trading Capability
            </h3>
            <p className="mt-3 text-gray-600">
              We operate inventory-based trading to ensure stable supply, competitive pricing and reliable fulfillment.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-600 mb-8">
          We are open to partnerships with brands, distributors and platforms.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>Email: phersonyu@gmail.com</p>
          <p>WhatsApp (Singapore): +65 80614675</p>
          <p>WhatsApp (Hong Kong): +852 52162440</p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="mailto:phersonyu@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Email Us
          </a>

          <a
            href="https://wa.me/6580614675"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="font-semibold mb-2">WUTONG</h3>
            <p className="text-gray-400">
              Cross-border distribution partner for home appliances in Asia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Entities</h3>
            <p className="text-gray-400">
              WUTONG GLOBAL COMMERCE PTE. LTD. (Singapore)
            </p>
            <p className="text-gray-400">
              WUTONG INTERNATIONAL GROUP CO., LIMITED (Hong Kong)
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">
              phersonyu@gmail.com
            </p>
            <p className="text-gray-400">
              +65 80614675
            </p>
            <p className="text-gray-400">
              +852 52162440
            </p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10 text-xs">
          © 2026 WUTONG. All rights reserved.
        </p>
      </footer>

    </main>
  );
}