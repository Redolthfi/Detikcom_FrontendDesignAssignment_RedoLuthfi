import HeroSection from '../sections/heroSection';
import AboutSection from '../sections/aboutSection';
import Sponsor from '../sections/sponsor';
import GallerySection from '../sections/gallerySection';
import BeritaSection from '../sections/beritaSection';
import Footer from '../sections/footer';
const LandingPages = () => {
    return (
        <>
            <section id="home">
                <HeroSection />
            </section>
            <section id="tentang-acara">
                <AboutSection />
            </section>
            <section id="galeri">
                <GallerySection />
            </section>
            <Sponsor />
            <section id="berita">
                <BeritaSection />
            </section>
            <section id="registrasi">
                <Footer />
            </section>

        </>
    )
}

export default LandingPages;