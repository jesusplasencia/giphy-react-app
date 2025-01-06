import './GifGrid.css';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { Loading } from '../loading/Loading';
import { GifItem } from '../item/GifItem';

export const GifGrid = ({ category, onDeleteCategory }) => {

    const { images, isLoading } = useFetchGifs(category);
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading
        onDeleteCategory(category);
    }

    return (
        <>
            <div className='gif-header'>
                <h3>{ category }</h3>
                <span onClick={handleSubmit}>📮</span>
            </div>
            <div className='gif-grid'>
                {
                    isLoading && <Loading />
                }
                {
                    !isLoading && images.map((img) => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
