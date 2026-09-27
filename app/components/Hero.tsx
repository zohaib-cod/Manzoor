export default function Hero() {
  return (
    <section className="bg-[#1f2a44] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Institute of Career Development
          </h1>

          <p className="mt-6 text-gray-300">
            Get access to high quality learning wherever you are,
            with online courses and programs.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-teal-500 px-6 py-3 rounded-lg">
              View Courses
            </button>
            <button className="bg-gray-700 px-6 py-3 rounded-lg">
              How it Works
            </button>
          </div>
        </div>

        <div>
          <img
            src="/Khan.jpg"
            alt="hero"
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}