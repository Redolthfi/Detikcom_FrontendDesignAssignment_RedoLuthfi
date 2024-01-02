import '../styles/footer.css';
import LogoEvent from '../assets/img/logo-event2.png';
import LogoFacebook from '../assets/img/facebook.png';
import LogoInstagram from '../assets/img/instagram.png';
import LogoTwitter from '../assets/img/twitter.png';
import LogoYoutube from '../assets/img/youtube.png';
import LogoLinkedin from '../assets/img/linkedin.png';
const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <img src={LogoEvent} alt="" className="logo-size" id="coloredLogo" />
                <div className="footer-container-text  mx-auto d-flex ali">
                    <div className="footer-text ">
                        <p>Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan total puluhan juta rupiah</p>
                    </div>
                    <div>
                        <div className="footer-container-title text-center  ">
                            <p>Connect With Us</p>
                        </div>
                        <div className="d-flex logo-style">
                            <img src={LogoFacebook} alt="" className="logo-size-facebook" />
                            <img src={LogoTwitter} alt="" className="logo-size-facebook" />
                            <img src={LogoInstagram} alt="" className="logo-size-facebook" />
                            <img src={LogoLinkedin} alt="" className="logo-size-facebook" />
                            <img src={LogoYoutube} alt="" className="logo-size-facebook" />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <hr className='mx-auto hr-style'/>
                <div className="copyright mx-auto">
                <p>Copyright @ 2023 detikcom. All right reserved</p>
                </div>
            </div>

        </>
    )
}

export default Footer;