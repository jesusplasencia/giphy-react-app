import './GifItem.css';

export const GifItem = ({ title, url, id }) => {
    return (
        <div className='gif-card'>
            <img src={url} alt={title} />
        </div>
    )
}
