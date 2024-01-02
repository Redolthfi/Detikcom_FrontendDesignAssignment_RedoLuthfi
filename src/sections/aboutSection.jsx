import "../styles/aboutSection.css";
import MapImg from "../assets/img/map1.png";
import ImgSide from "../assets/img/imgSide.png";
import Buttons from "../components/button";
const AboutSection = () => {
    return (
        <div className="about-section mt-5" >
            <div className="container-about-items mx-auto d-flex">
                <div className="card-size">
                    <img src={MapImg} className="card-img-top card-img-size " alt="..." />
                    <div className="card-body container-card-text ">
                        <h5 className="card-text1  justify-content-start d-flex">10k FOR RUN</h5>
                        <p className="card-text2 ">Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!</p>
                    </div>
                </div>
                <div className="container-card-nothumbnaill ">
                    <div className="card-1 mb-4">
                        <div className="card-body ">
                            <h5 className="card-title1 justify-content-start  d-flex">GRATIS DAN BERHADIAH</h5>
                            <p className="card-text">Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!</p>
                        </div>
                    </div>
                    <div className=" card-2 ">
                        <div className="card-body">
                            <h5 className="card-title1 justify-content-start d-flex ">50+ TENANT BAZZAR</h5>
                            <p className="card-text">Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion</p>
                        </div>
                    </div>
                    <div className="card-3 d-flex" >
                        <div className="card-body ">
                            <img src={ImgSide} alt="" />
                        </div>
                        <div className="">
                            <h5 className="card-title1 text-start d-flex">SPECIAL <br /> PERFORMANCE</h5>
                            <p className="card-textpromo">Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                    <Buttons>
                <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
                </a>
                </Buttons>
            </div>
        </div>

    )
}

export default AboutSection;