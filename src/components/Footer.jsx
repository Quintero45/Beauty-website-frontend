export default function Footer() {
  return (
    <footer className="bg-[#FFF0F6] pt-32 pb-8 text-gray-700 text-sm">
      {/* Newsletter */}
      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-lg px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 -mt-48">
        <h2 className="text-2xl md:text-3xl text-pink-600 font-serif font-medium">
          Subscribe Newsletters
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-full px-5 py-3 w-full md:w-72 focus:outline-none"
          />
          <button className="border border-pink-500 text-pink-500 rounded-full px-6 py-2 hover:bg-pink-500 hover:text-white transition-all">
            Submit <span className="ml-1">📩</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-20 pt-8">
        {/* Navigation and Social */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#">About Us</a>
            <a href="#">Explore</a>
            <a href="#">Offers</a>
            <a href="#">Best Sellers</a>
            <a href="#">Contact Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl text-gray-700">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a
              href="https://www.instagram.com/empoderarte_0?igsh=bW56c3hiczhoZmQy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2024 InterfaceMage. All rights reserved.</p>
          <h3 className="text-xl font-signature">EmpoderArte</h3>
          <div className="flex gap-4 items-center">
            <a href="#">Terms of Service</a>
            <span className="text-pink-500">•</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
