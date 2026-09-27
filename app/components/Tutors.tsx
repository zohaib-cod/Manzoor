// const tutors = [
//   { name: "Saima Nazir", img: "/1.jpg" },
//   { name: "Svitlana", img: "/2.jpg" },
//   { name: "Saba Farooq", img: "/3.jpg" },
// ];

// export default function Home() {
//   return (
//     <main>

//       {/* ================= NEWS & EVENTS ================= */}
//       <section className="py-12 bg-gray-100 text-center">
//         <h2 className="text-2xl font-bold">News and Events</h2>

//         <div className="mt-4 flex justify-center gap-2">
//           <input type="date" className="border p-2 rounded" />
//           <button className="bg-orange-500 text-white px-4 py-2 rounded">
//             Today
//           </button>
//         </div>

//         <p className="text-gray-500 mt-4">No Events Found</p>

//         {/* Testimonials */}
//         <div className="mt-10 bg-[#1f2a44] text-white py-10 px-6">
//           <h3 className="text-xl font-bold mb-4">What People Say</h3>
//           <p className="italic max-w-xl mx-auto">
//             "We consistently guide courses for personal tutor training,
//             delivering friendly and supportive learning."
//           </p>
//           <span className="block mt-3">- Student Review</span>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="bg-teal-500 text-white py-8">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
//           <div>
//             <h3 className="text-xl font-bold">100</h3>
//             <p>Events</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">10+</h3>
//             <p>Skilled Tutors</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">20+</h3>
//             <p>Courses</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">8k+</h3>
//             <p>People Worldwide</p>
//           </div>
//         </div>
//       </section>

//       {/* ================= RESOURCES ================= */}
//       <section className="bg-teal-500 py-12">
//         <div className="max-w-6xl mx-auto px-6">

//           {/* Top Cards */}
//           <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
//             <div className="bg-white p-6 rounded-lg text-center w-full md:w-1/4">
//               <p className="font-semibold">
//                 Summary for Teaching Qualifications
//               </p>
//               <a href="#" className="text-blue-500 text-sm">
//                 View Details
//               </a>
//             </div>

//             <div className="bg-white p-6 rounded-lg text-center w-full md:w-1/4">
//               <p className="font-semibold">Summary for Exams</p>
//               <a href="#" className="text-blue-500 text-sm">
//                 View Details
//               </a>
//             </div>

//             <div className="bg-gray-100 p-6 rounded-lg text-center w-full md:w-1/4">
//               <p>Review us on Google ⭐⭐⭐⭐⭐</p>
//               <button className="mt-2 bg-black text-white px-3 py-1 rounded">
//                 Write Review
//               </button>
//             </div>
//           </div>

//           {/* Bottom Cards */}
//           <div className="flex flex-col md:flex-row justify-center gap-6">
//             <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
//               <p className="font-semibold">Scholarships</p>
//               <a href="#" className="text-blue-500 text-sm">
//                 Read More
//               </a>
//             </div>

//             <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
//               <p className="font-semibold">How to Pay</p>
//               <a href="#" className="text-blue-500 text-sm">
//                 Read More
//               </a>
//             </div>

//             <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
//               <p className="font-semibold">Request Form</p>
//               <a href="#" className="text-blue-500 text-sm">
//                 Submit Form
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= TUTORS ================= */}
//       <section className="py-16 bg-gray-100">

//         {/* Heading with Lines */}
//         <div className="flex items-center justify-center gap-4 mb-10">
//           <span className="w-16 h-[2px] bg-gray-400"></span>
//           <h2 className="text-3xl font-bold whitespace-nowrap">
//             Our Tutors
//           </h2>
//           <span className="w-16 h-[2px] bg-gray-400"></span>
//         </div>

//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//           {tutors.map((tutor, i) => (
//             <div
//               key={i}
//               className="text-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
//             >
//               <img
//                 src={tutor.img}
//                 className="w-32 h-32 mx-auto rounded-full object-cover"
//                 alt={tutor.name}
//               />

//               <h3 className="mt-4 font-bold text-lg">
//                 {tutor.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </section>

//     </main>
//   );
// }


const tutors = [
  { name: "Saima Nazir", img: "/1.jpg" },
  { name: "Svitlana", img: "/2.jpg" },
  { name: "Saba Farooq", img: "/3.jpg" },
];

export default function Home() {
  return (
    <main>

      {/* ================= NEWS & EVENTS ================= */}
      <section className="py-14 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          News and Events
        </h2>

        <div className="mt-4 flex justify-center gap-2">
          <input type="date" className="border p-2 rounded" />
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Today
          </button>
        </div>

        <p className="text-gray-500 mt-4">No Events Found</p>

        {/* Testimonials */}
        <div className="mt-12 bg-[#1f2a44] text-white py-12 px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What People Say
          </h3>
          <p className="italic max-w-xl mx-auto text-lg">
            "We consistently guide courses for personal tutor training,
            delivering friendly and supportive learning."
          </p>
          <span className="block mt-3 text-sm">- Student Review</span>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-teal-500 text-white py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">100</h3>
            <p className="text-lg">Events</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-lg">Skilled Tutors</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-lg">Courses</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">8k+</h3>
            <p className="text-lg">People Worldwide</p>
          </div>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="bg-teal-500 py-14">
        <div className="max-w-6xl mx-auto px-6">

          {/* Top Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg text-center w-full md:w-1/4">
              <p className="font-semibold text-lg">
                Summary for Teaching Qualifications
              </p>
              <a href="#" className="text-blue-500 text-sm">
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg text-center w-full md:w-1/4">
              <p className="font-semibold text-lg">Summary for Exams</p>
              <a href="#" className="text-blue-500 text-sm">
                View Details
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center w-full md:w-1/4">
              <p className="text-lg">Review us on Google ⭐⭐⭐⭐⭐</p>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded">
                Write Review
              </button>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
              <p className="font-semibold text-lg">Scholarships</p>
              <a href="#" className="text-blue-500 text-sm">
                Read More
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
              <p className="font-semibold text-lg">How to Pay</p>
              <a href="#" className="text-blue-500 text-sm">
                Read More
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg text-center w-full md:w-1/6">
              <p className="font-semibold text-lg">Request Form</p>
              <a href="#" className="text-blue-500 text-sm">
                Submit Form
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TUTORS ================= */}
      <section className="py-20 bg-gray-100">

        {/* Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-10 px-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Our tutors are highly qualified professionals dedicated to helping
            students achieve their academic goals through personalized guidance
            and effective teaching methods.
          </p>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="w-20 h-[3px] bg-gray-400"></span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2c1e1e]">
            Our Tutors
          </h2>

          <span className="w-20 h-[3px] bg-gray-400"></span>
        </div>

        {/* Tutors Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {tutors.map((tutor, i) => (
            <div
              key={i}
              className="text-center bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300"
            >
              <img
                src={tutor.img}
                className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-gray-200"
                alt={tutor.name}
              />

              <h3 className="mt-5 font-semibold text-xl text-gray-800">
                {tutor.name}
              </h3>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}