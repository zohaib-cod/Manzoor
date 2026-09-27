import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Courses from "@/app/components/Courses";
import Tutors from "@/app/components/Tutors";
import Footer from "@/app/components/Footer";
import Partner from "@/app/components/Partner";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Partner />
       <Tutors />
      <Footer />   
    </>
  );
}