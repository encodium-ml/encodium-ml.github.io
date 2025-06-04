import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StudentClassesPage from './pages/StudentClassesPage';
import AdultClassesPage from './pages/AdultClassesPage';
import FacultyPage from './pages/FacultyPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-classes" element={<StudentClassesPage />} />
            <Route path="/adult-classes" element={<AdultClassesPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;