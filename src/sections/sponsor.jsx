import "../styles/sponsor.css"
import { Container, Row, Col } from 'react-bootstrap';
import LogoJwc from '../assets/img/frame1.png'
import Logo2 from '../assets/img/frame2.png'
import Logo3 from '../assets/img/frame3.png'
import Logo4 from '../assets/img/frame4.png'
import Logo5 from '../assets/img/frame5.png'
import Logo6 from '../assets/img/frame6.png'
import Logo7 from '../assets/img/frame7.png'
const Sponsor = () => {
    const logos = [LogoJwc, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

    const renderLogos = (logoArray) => {
        return logoArray.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ));
    };

    return (
        <>
            <div className="sponsor-section">
                <div className="container-title mx-auto">
                    <h5 className="sponsor-title">DIDUKUNG OLEH</h5>
                </div>
                <div className="logos">
                    <div className="logo-slide">{renderLogos(logos)}</div>
                    <div className="logo-slide">{renderLogos(logos)}</div>
                </div>
            </div>
        </>
    )
}

export default Sponsor;