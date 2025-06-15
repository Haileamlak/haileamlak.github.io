import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Education from "./components/Education";

function App() {
    return (
        <>
            <Navbar />
            <main >
                <Hero />
                <About />
                <Education />
                <BackToTop />
            </main>
        </>
    );
}

export default App;
