import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Freelance from './components/Freelance';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { ArrowUp } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScrollTop(totalScroll > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inView');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const elementsToAnimate = document.querySelectorAll('.revealOnScroll, .sectionTitle, .sectionHeader');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolioApp">
      {/* Luminous Top Scroll Progress Bar */}
      <div
        className="topScrollProgressBar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <a href="#main" className="skipLink">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Freelance />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`floatingScrollBtn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;
