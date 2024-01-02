import React from 'react';
import '../styles/cardArtikel.css';

const CardArtikel = (props) => {
    const { src, title, description, className, classNameTitle } = props;

    return (
        <div className="card-artikel-size card">
            <img src={src} className="card-img-top img-artikel-size" alt="..." />
            <div className="card-body">
                <h5 className={classNameTitle}>{title}</h5>
                <p className={className}>
                    {description}
                </p>
            </div>
        </div>
    );
};  

export default CardArtikel;