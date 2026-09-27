// components/CoursesSection.jsx
import Image from "next/image";

const courses = [
  {
    title: "CELTA",
    tag: "Pre CELTA",
    img: "/1.jpg",
  },
  {
    title: "TEFL",
    tag: "Teaching Qualifications",
    img: "/2.jpg",
  },
  {
    title: "Train the Trainer",
    tag: "Teaching Qualifications",
    img: "/3.jpg",
  },
  {
    title: "CELT S",
    tag: "Teaching Qualifications",
    img: "/4.jpg",
  },
];

const BurgerLines = () => (
  <div className="flex flex-col gap-1">
    <span className="w-6 h-[2px] bg-black block"></span>
    <span className="w-6 h-[2px] bg-black block"></span>
    <span className="w-6 h-[2px] bg-black block"></span>
  </div>
);

export default function CoursesSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Heading */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <BurgerLines />
          <h2 className="text-3xl font-bold">Explore Our Courses</h2>
          <BurgerLines />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 mb-10 text-sm font-semibold">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
            ALL
          </button>
          <button className="hover:text-blue-600">
            EXAMS AND PREPARATION
          </button>
          <button className="hover:text-blue-600">PRE CELTA</button>
          <button className="hover:text-blue-600">
            TEACHING QUALIFICATIONS
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={300}
                height={400}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                {course.tag}
              </span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white text-lg font-bold">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Heading */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <BurgerLines />
          <h3 className="text-xl font-semibold">Start Learning Today</h3>
          <BurgerLines />
        </div>
      </div>
    </section>
  );
}