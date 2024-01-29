import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallerys, galleryRefreshCallBack })  {
    return (
        <div data-testid="galleryList">
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