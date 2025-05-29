import Products from "@/components/Products";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <Products />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
