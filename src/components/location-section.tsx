export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Location
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Address</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jl. Siwalankerto Permai II F-7
              <br />
              Surabaya, East Java
              <br />
              Indonesia
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">📞 Contact</h3>
            <div className="text-gray-700 space-y-1">
              <p>WhatsApp/Phone: 083856705857</p>
              <b>Location Survey by Appoinment</b>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏫 Nearby Landmarks</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• ~10 min walk to Petra Christian University (750 m)</li>
                <li>• ~10 min drive to Trans Icon Mall (3.5 km)</li>
                <li>• ~10 min drive to nearest hospital (3.9 km)</li>
              </ul>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <iframe
                src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.8460623613057!2d112.74019499952597!3d-7.342166962401818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb367b73692f%3A0x41afcdd4d710f9d7!2sJl.%20Siwalankerto%20Permai%20II%20No.F7%2C%20Siwalankerto%2C%20Kec.%20Wonocolo%2C%20Surabaya%2C%20Jawa%20Timur%2060236!5e0!3m2!1sen!2sid!4v1771140971823!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Imperial Kost Location"
              />
            </div>
            <div className="p-4 text-center text-sm text-gray-500">
              Click the map to get directions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}