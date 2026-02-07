
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Pillars from './components/Pillars';
import Ecosystem from './components/Ecosystem';
import TrustedBy from './components/TrustedBy';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="relative isolate font-sans">
            <div className="bg-blobs">
                <div className="blob blob-purple"></div>
                <div className="blob blob-lime"></div>
                <div className="blob blob-teal"></div>
            </div>
            <Header />
            <main>
                <Hero />
                <Mission />
                <Pillars />
                <Ecosystem />
                <TrustedBy />
                <Careers />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;