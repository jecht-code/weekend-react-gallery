import axios from 'axios';
import React from 'react';


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

    //No Delete function

    return (
        <div data-testid="galleryItem">
            <h2>My Gallery</h2>
            <div>
                <p>{gallerys.title}</p>
                <img src={gallerys.url} alt={gallerys.title}/>
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