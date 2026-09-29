import { useState, useEffect, useRef } from 'react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const progressBarRef = useRef(null);

  // High-performance scroll handler with requestAnimationFrame & direct DOM mutation
  // Prevents re-rendering the whole component tree on every scroll pixel!
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress}%`;
          }

          const shouldShow = totalScroll > 500;
          setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Eager, instant scroll reveal: triggers 250px BEFORE entering viewport!
  // Ensures user NEVER sees blank spaces while scrolling.
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
      threshold: 0,
      rootMargin: '250px 0px 100px 0px'
    });

    const elementsToAnimate = document.querySelectorAll('.revealOnScroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Safety fallback: ensure all content becomes visible immediately after 300ms
    const timer = setTimeout(() => {
      document.querySelectorAll('.revealOnScroll:not(.inView)').forEach((el) => {
        el.classList.add('inView');
      });
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolioApp">
      {/* Luminous Top Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="topScrollProgressBar"
        style={{ width: '0%' }}
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
