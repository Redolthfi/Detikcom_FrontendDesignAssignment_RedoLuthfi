import { useState } from "react"
import LeftArrow from "../assets/img/arrow-left.png"
import RightArrow from "../assets/img/arrow-right.png"
const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const sliderStyle = {
        height: "100%",
        position: "relative",
    }

    const slideStyle = {
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        borderRadius: "1.5rem"

    }

    const arrowStyleBase = {
        position: "absolute",
        top: "50%",
        fontSize: "2.8rem",
        zIndex: 1,
        cursor: "pointer",
        transform: "translate(0, -50%)",
        color: currentImage === 0 ? "#ccc" : "#fff", 
        transition: "color 0.3s ease", 
    };


    const leftArrowStyle = {
        ...arrowStyleBase,
        left: "2rem",
    };


    const rightArrowStyle = {
        ...arrowStyleBase,
        right: "2rem",
        color: currentImage === images.length - 1 ? "#ccc" : "#fff", 
    };


    const thumbnailContainerStyle = {
        display: "flex",
        marginTop: "0.6rem",
        alignItems: "center",
        justifyContent: "center",
        filter: currentImage === images.length - 1 ? "grayscale(100%)" : "none",
        transition: "filter 0.3s ease", 

    };

    const thumbnailStyle = {
        width: "16rem",
        height: "9rem",
        cursor: "pointer",
        borderRadius: "1rem",
        overflow: "hidden",
        marginRight: "0.8rem",
        filter: currentImage === images.length - 1 ? "grayscale(100%)" : "none", 
    };

    const handleLeftArrow = () => {
        setCurrentImage(currentImage - 1)
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        }
    }

    const handleRightArrow = () => {
        setCurrentImage(currentImage + 1)
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        }
    }

    const handleThumbnailClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <>
            <div style={sliderStyle}>
                <div style={leftArrowStyle} onClick={handleLeftArrow}><img src={LeftArrow} alt="" /></div>
                <div style={rightArrowStyle} onClick={handleRightArrow}><img src={RightArrow} alt="" /></div>
                <div style={slideStyle}></div>
                <div style={thumbnailContainerStyle}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                ...thumbnailStyle,
                                filter: currentImage !== index ? "grayscale(100%)" : "none",
                            }}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageSlider;