import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            {/* <Navbar /> */}
            <main >
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />

                <Skills />
                <Extra />
                <Contact />
                <Footer />
                <BackToTop />
            </main>
        </>
    );
}

export default App;
