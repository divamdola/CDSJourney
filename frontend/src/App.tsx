import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import LearningSteps from './components/LearningSteps';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';
import './App.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Courses />
                  <LearningSteps />
                  <About />
                  <Mentors />
                  <Testimonials />
                  <Timeline />
                  <FinalCTA />
                </>
              } />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/courses" element={<Navigate to="/" replace />} />
              <Route path="/mentors" element={<Navigate to="/" replace />} />
              <Route path="/faq" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/register" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;