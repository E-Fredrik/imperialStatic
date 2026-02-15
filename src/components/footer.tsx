export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src="/assets/images/imperial-kost-logo.png" alt="Imperial Logo" className="h-20 w-auto mb-4" />
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Rooms</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p>📍 Jl. Siwalankerto Permai II F-7, Surabaya, Indonesia</p>
              <p>📞 083856705857 (Whatsapp Available)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Imperial Kost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}