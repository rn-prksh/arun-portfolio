import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShowreelModal from './components/ShowreelModal';
import ProjectModal from './components/ProjectModal';
import { PROJECTS_DATA } from './data/portfolioData';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
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
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    const elementsToAnimate = document.querySelectorAll('.revealOnScroll, .sectionTitle, .sectionHeader');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSelectProjectByTitle = (title) => {
    const found = PROJECTS_DATA.find(
      (p) => p.title.toLowerCase().includes(title.toLowerCase()) || title.toLowerCase().includes(p.title.toLowerCase())
    );
    if (found) {
      setShowreelOpen(false);
      setSelectedProject(found);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolioApp">
      <div
        className="topScrollProgressBar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <a href="#main" className="skipLink">
        Skip to main content
      </a>

      <Navbar onOpenShowreel={() => setShowreelOpen(true)} />

      <main id="main">
        <Hero onOpenShowreel={() => setShowreelOpen(true)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <About />
        <Resources />
        <Contact />
      </main>

      <Footer onOpenShowreel={() => setShowreelOpen(true)} />

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onSelectProject={handleSelectProjectByTitle}
      />

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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
