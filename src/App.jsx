import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <Navbar />
            <main >
                <Hero />
                <About />
                <Education />
                <Experience />
                <BackToTop />
            </main>
        </>
    );
}

export default App;
