
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Value } from './components/Value';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <TechStack />
        <Projects />
        <Value />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

export default App;
