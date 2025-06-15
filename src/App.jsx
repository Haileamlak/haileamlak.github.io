import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Button from "./components/Button";

function App() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <Hero />
                <About />
                {/* Projects, Experience, Contact coming next */}
                <BackToTop />
            </main>
        </>
    );
}

export default App;
