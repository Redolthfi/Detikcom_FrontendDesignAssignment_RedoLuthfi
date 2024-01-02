import "../styles/heroSection.css"
import LogoEvent from "../assets/img/logo-event2.png"
import Buttons from "../components/button"
import Navbar from "../components/navbar";
import { Link as ScrollLink } from 'react-scroll';
const HeroSection = () => {
    return (
        <>
            <Navbar />
            <div className="hero-section">
                <div className="container-items ">
                    <div>
                        <img src={LogoEvent} alt="" className="event-logo-size" />
                    </div>
                    <div>
                        <ScrollLink to="tentang-acara" smooth={true} duration={500}>
                            <Buttons >Tentang Acara</Buttons>
                        </ScrollLink>
                    </div>
                </div>
            </div>

        </>
    )


}

export default HeroSection;