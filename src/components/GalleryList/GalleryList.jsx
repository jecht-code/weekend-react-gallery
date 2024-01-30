import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ gallerys, galleryRefreshCallBack })  {
    return (
        <div data-testid="galleryList" className='myForm'>
            {gallerys.map((gallery) => {
                return (
                    <GalleryItem 
                        key={gallery.id}
                        gallerys={gallery}
                        galleryRefreshCallBack={galleryRefreshCallBack}
                    />
                )
            })}
        </div>
    )
}

export default GalleryList;