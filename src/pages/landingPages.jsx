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
                {/* Konten untuk bagian Tentang Acara */}
            </section>
            <section id="galeri">
                <GallerySection />
                {/* Konten untuk bagian Galeri */}
            </section>
            <Sponsor />
            <section id="berita">
                {/* Konten untuk bagian Berita */}
                <BeritaSection />
            </section>
            <section id="registrasi">
                {/* Konten untuk bagian Registrasi */}
                <Footer />
            </section>

        </>
    )
}

export default LandingPages;