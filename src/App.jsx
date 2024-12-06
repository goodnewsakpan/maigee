import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import StorySection from './components/StorySection';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>
        <MainSection />
        <StorySection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App