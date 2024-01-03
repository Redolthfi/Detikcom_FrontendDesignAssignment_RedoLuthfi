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
                {/* Sudah Responsif */}
                <HeroSection />
            </section>
            <section id="tentang-acara">
                {/* Sudah Responsif */}
                <AboutSection />
            </section>
            <section id="galeri">
                <GallerySection />
            </section>
            {/* Sudah Responsif */}
            <Sponsor />
            <section id="berita">
                <BeritaSection />
                
            </section>
            <section id="registrasi">
            </section>
            <Footer />

        </>
    )
}

export default LandingPages;