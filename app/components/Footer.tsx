export default function Footer() {
  return (
    <footer className="bg-[#1f2a44] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* ================= LEFT LOGO + TEXT ================= */}
        <div>
          <h2 className="font-bold text-lg mb-4">
            Institute of Career Development
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Institute of Career Development has been working with adult learners,
            who want to excel in their fields, since its birth in 2008.
          </p>
        </div>

        {/* ================= MENU ================= */}
        <div>
          <h3 className="font-bold text-xl mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Chat with AI</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">
              Log in to Teaching courses
            </li>
            <li className="hover:text-white cursor-pointer">Online Store</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* ================= QUERY SECTION ================= */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Submit Your Query
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Fill out the form below and we'll get back to you soon
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded text-white font-semibold">
            Submit Query
          </button>

          <p className="text-gray-400 text-sm mt-4">
            We care about your data in our{" "}
            <span className="text-blue-400 cursor-pointer">
              privacy policy
            </span>.
          </p>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex md:flex-col gap-4 md:items-end text-xl">
          <span className="cursor-pointer hover:text-gray-300">f</span>
          <span className="cursor-pointer hover:text-gray-300">📷</span>
          <span className="cursor-pointer hover:text-gray-300">▶</span>
          <span className="cursor-pointer hover:text-gray-300">in</span>
        </div>

      </div>
    </footer>
  );
}