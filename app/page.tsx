export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="w-full py-4 px-6 flex justify-between items-center border-b bg-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/wtlogo.png" className="h-8" />
          <span className="font-bold tracking-wide">WUTONG</span>
        </div>

        <nav className="flex gap-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
      >
        <img
          src="/hero.png"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Cross-Border Distribution Partner for Home Appliances in Asia
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-200">
            Leveraging a dual-hub structure in Hong Kong and Singapore, we connect brands, e-commerce platforms and distribution channels across Asia.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="mailto:phersonyu@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-lg"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/6580614675"
              className="border border-white px-6 py-3 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Dual-Hub Structure
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 香港（左） */}
          <div className="group">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/about-HK.png"
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Hong Kong</h3>
            <p className="text-gray-600 text-sm mt-2">
              Global sourcing, trading and inventory hub.
            </p>
          </div>

          {/* 新加坡（右） */}
          <div className="group">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/about-SG.png"
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Singapore</h3>
            <p className="text-gray-600 text-sm mt-2">
              Southeast Asia market expansion and distribution center.
            </p>
          </div>

        </div>

        <p className="text-gray-600 text-center mt-10 max-w-3xl mx-auto">
          WUTONG GLOBAL COMMERCE (Singapore) and WUTONG INTERNATIONAL GROUP (Hong Kong) operate as a dual-hub cross-border trading platform focused on home appliances.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <img src="/services.png" className="rounded-xl mb-10 w-full" />

          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                Cross-Border Distribution
              </h3>
              <p className="mt-3 text-gray-600">
                Distribution across China, Hong Kong and Southeast Asia.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                Platform Access
              </h3>
              <p className="mt-3 text-gray-600">
                Access to Tmall Global, Poizon and Vipshop.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                Inventory & Trading
              </h3>
              <p className="mt-3 text-gray-600">
                Inventory-backed trading with reliable fulfillment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-600">
          phersonyu@gmail.com
        </p>

        <p className="text-gray-600 mt-2">
          +65 80614675 | +852 52162440
        </p>
      </section>

    </main>
  );
}