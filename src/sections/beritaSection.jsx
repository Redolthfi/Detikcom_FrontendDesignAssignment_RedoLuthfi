import React, { useState } from 'react';
import '../styles/beritaSection.css';
import artikelImg1 from '../assets/img/thumbnail-artikel-1.png';
import artikelImg2 from '../assets/img/thumbnail-artikel-2.png';
import artikelImg3 from '../assets/img/thumbnail-artikel-3.png';
import artikelImg4 from '../assets/img/thumbnail-artikel-4.png';
import artikelImg5 from '../assets/img/thumbnail-artikel-5.png';
import artikelImg6 from '../assets/img/thumbnail-artikel-6.png';
import CameraIcon from '../assets/img/camera.png';
import CardTimeStamp from '../components/cardTimeStamp';
import CardArtikel from '../components/cardArtikel';
import PlayIcon from '../assets/img/play.png';
import Buttons from '../components/button';



const BeritaSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('artikel');

    const handleCategoryChange = (category) => {
        event.preventDefault();
        setSelectedCategory(category);
    };

    return (
        <div className="berita-section  ">
            <div className={`berita-container mx-auto  ${selectedCategory}-container`}>
                <h5 className="berita-title">ARTIKEL TERKAIT</h5>
                <div className="berita-konten">
                    <div className="justify-content-center d-flex">
                        <div className="rounded-pill navmenu-berita">
                            <a
                                href="#"
                                onClick={() => handleCategoryChange('artikel')}
                                className={selectedCategory === 'artikel' ? 'active' : ''}
                            >
                                Artikel
                            </a>
                            <a
                                href="#"
                                onClick={() => handleCategoryChange('foto')}
                                className={selectedCategory === 'foto' ? 'active' : ''}
                            >
                                Foto
                            </a>
                            <a
                                href="#"
                                onClick={() => handleCategoryChange('video')}
                                className={selectedCategory === 'video' ? 'active' : ''}
                            >
                                Video
                            </a>
                        </div>
                    </div>
                    <div className={`berita-content d-flex flex-wrap mt-2  ${selectedCategory}-content`}>
                        {selectedCategory === 'artikel' && (
                            // Konten artikel
                            <>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg1}
                                        title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                                        description="Sabtu, 25 Nov 2023 20:00 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg2}
                                        title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg3}
                                        title="Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg4}
                                        title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                                        description="Sabtu, 18 Nov 2023 17:39 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg5}
                                        title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                                        description="Kamis, 16 Nov 2023 16:34 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardArtikel
                                        src={artikelImg6}
                                        title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                                        description="Minggu, 12 Nov 2023 11:55 WIB"
                                        className="card-text-artikel"
                                        classNameTitle="card-title-artikel"
                                    />
                                </div>
                            </>
                        )}
                        {selectedCategory === 'foto' && (
                            // Konten foto
                            <>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg1}
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                        title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                                        description="Sabtu, 25 Nov 2023 20:00 WIB"
                                        onClick={() => console.log('Kartu diklik')}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg2}
                                        title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg3}
                                        title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg4}
                                        title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                                        description="Sabtu, 18 Nov 2023 17:39 WIB"
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg5}
                                        title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                                        description="Kamis, 16 Nov 2023 16:34 WIB"
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg6}
                                        title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                                        description="Minggu, 12 Nov 2023 11:55 WIB"
                                        timestampIcon={CameraIcon}
                                        timestampText="5 FOTO"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                            </>
                        )}
                        {selectedCategory === 'video' && (
                            // Konten video
                            <>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg1}
                                        title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                                        description="Sabtu, 25 Nov 2023 20:00 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg2}
                                        title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg3}
                                        title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                                        description="Selasa, 28 Nov 2023 07:42 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg4}
                                        title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                                        description="Sabtu, 18 Nov 2023 17:39 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg5}
                                        title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                                        description="Kamis, 16 Nov 2023 16:34 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <CardTimeStamp
                                        src={artikelImg6}
                                        title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                                        description="Minggu, 12 Nov 2023 11:55 WIB"
                                        timestampIcon={PlayIcon}
                                        timestampText="01:45"
                                        onClick={() => console.log('Kartu diklik')}
                                        className="card-text-timestamp"
                                        classNameTitle="card-title-timestamp"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <Buttons>
                    <a href="https://www.detik.com/search/searchall?query=fun+run&siteid=2" target="_blank" rel="noopener noreferrer">
                    Lihat Lebih Banyak
                    </a>
                    </Buttons>
                </div>
            </div>
        </div>
    );
};

export default BeritaSection;
