// import Image from "next/image";

// const partners = [
//      { name: "Cambridge-Assesment ", img: "/5.jpg" },
//   { name: "PSI", img: "/6.jpg" },
//   { name: "LanguageCert", img: "/7.jpg" },
//   { name: "British Council", img: "/8.jpg" },
//   { name: "OET", img: "/9.jpg" },
// ];

// export default function AboutWithPartners() {
//   return (
//     <section className="py-16">

//       {/* ================= Heading + Paragraph ================= */}
//       <div className="max-w-4xl mx-auto px-6 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
//           Pakistan English Language Teachers’ Association
//         </h2>

//         <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//           The Pakistan English Language Teachers’ Association (PELTA) is a
//           registered, non-political, non-government (NGO), voluntary body of
//           English language professionals committed to professional development,
//           networking, and promoting excellence in English language teaching
//           across Pakistan.
//         </p>
//       </div>

//       {/* ================= Logos Row (Single Line) ================= */}
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex items-center justify-center gap-12 flex-wrap md:flex-nowrap">

//           {partners.map((partner, i) => (
//             <div
//               key={i}
//               className="grayscale hover:grayscale-0 transition duration-300"
//             >
//               <Image
//                 src={partner.img}
//                 alt={partner.name}
//                 width={130}
//                 height={70}
//                 className="object-contain"
//               />
//             </div>
//           ))}

//         </div>
//       </div>

//     </section>
//   );
// }


import Image from "next/image";

const partners = [
  { name: "Cambridge Assessment", img: "/5.jpg" },
  { name: "PSI", img: "/6.jpg" },
  { name: "LanguageCert", img: "/7.jpg" },
  { name: "British Council", img: "/8.jpg" },
  { name: "OET", img: "/9.jpg" },
];

export default function AboutWithPartners() {
  return (
    <section className="py-16">

      {/* ================= Heading + Paragraph ================= */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Pakistan English Language Teachers’ Association
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          The Pakistan English Language Teachers’ Association (PELTA) is a
          registered, non-political, non-government (NGO), voluntary body of
          English language professionals committed to professional development,
          networking, and promoting excellence in English language teaching
          across Pakistan.
        </p>
      </div>

      {/* ================= Brown Background Logos ================= */}
      <div className="bg-[#7655] py-10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex items-center justify-between gap-10 flex-nowrap overflow-x-auto">

            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={160}   // 👈 logo size increase
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}