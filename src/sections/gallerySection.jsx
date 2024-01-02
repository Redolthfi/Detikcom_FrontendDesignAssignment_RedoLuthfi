import "../styles/gallery.css"
import ImageSlider from "../components/ImageSlider"
import img1 from "../assets/img/slider1.png"
import img2 from "../assets/img/slider2.png"
import img3 from "../assets/img/slider3.png"
import img4 from "../assets/img/slider4.png"
const GallerySection = () => {

    const images = [img1, img2, img3, img4]

    return (
        <>
            <div className="gallery-section">
                <div className="gallery-container mx-auto">
                    <h5 className="gallery-title mx-auto ">GALLERY SUDIRMAN RUN 2022</h5>
                    <div className="gallery-slider ">
                        <ImageSlider images={images} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerySection;