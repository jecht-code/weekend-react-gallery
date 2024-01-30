import axios from 'axios';
import React from 'react';
import { useState } from 'react';


function GalleryItem({ gallerys, galleryRefreshCallBack }) {
    //Axios PUT call by id
    const updateGallery = (galleryId) => {
        //axios PUT call
        return axios.put(`/api/gallery/like/${galleryId}`);
      };
    //Click handler
    const handleClickloveit = (id) => {
        updateGallery(id)
            .then((response) => {
                galleryRefreshCallBack();
            })
            .catch((err) => {
                console.error('ERROR:', err);
            });
    };
    //Toggle picture handler
    const [togglepicture, setTogglePicture] = useState(false);
    //No Delete function
    return (
        
        <div data-testid="galleryItem">
            <div data-testid="toggle" onClick={() => setTogglePicture(!togglepicture)}>
                {togglepicture ? (
                <p data-testid="description">
                {gallerys.description}
                </p>
                ) : (
                <img src={gallerys.url} alt={gallerys.title}/>
                )}
            </div>
            <div>
                <p>{gallerys.title}</p>
                <button data-testid="like" onClick={(event) => {
                    event.preventDefault();
                    handleClickloveit(gallerys.id);
                }}
                >
                Like
                </button>
                <p>{gallerys.likes} people love this!</p>
            </div>
        </div>
        
    )
}

export default GalleryItem;