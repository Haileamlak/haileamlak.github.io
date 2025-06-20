import { useEffect, useState } from "react";
import "../styles/BackToTop.css"; 

import BackToTopIcon from "../assets/arrow-up.png"; // Adjust the path as necessary

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
        <button onClick={scrollToTop} className="back-to-top">
            <img src={BackToTopIcon} alt="Back to top" style={{ width: '24px', height: '24px' }} />
        </button>
    ) : null;
};

export default BackToTop;
