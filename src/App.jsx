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

                {/* view resume button with a link to google drive link of the my resume */}
                <Button text="View Resume" onClick={() => window.open('https://drive.google.com/file/d/1rYu-mIcsTrAeCuH-xHPofrI1i1qNVzqO/view?pli=1', '_blank')} imageSrc="src/assets/resume-icon.png" />
                <About />
                {/* Projects, Experience, Contact coming next */}
                <BackToTop />
            </main>
        </>
    );
}

export default App;
