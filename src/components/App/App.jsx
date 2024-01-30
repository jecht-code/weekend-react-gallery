import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    const fetchGallery = () => {
      //axios GET call
      return axios.get('/api/gallery');
    };

    const refreshGallery = () => {
      const galleryPromise = fetchGallery();
      galleryPromise
        //success
        .then((response) => {
          console.log('DATA:', response);
          setGalleryItems(response.data);
        })
        //failure
        .catch((err) => {
          console.error('ERROR:', err);
        });
    };
      //initial load of the components
    useEffect(() => {
        //body of effect
    console.log('initial load');
        //api call
    refreshGallery();
    }, []);

    return (
      <div data-testid="App">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList
          gallerys={galleryItems}
          galleryRefreshCallBack={refreshGallery}
        />
      </div>
    );
}

export default App;
