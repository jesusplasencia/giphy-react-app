import { useState } from 'react';
import './GifExpertApp.css';
import { Search, GifGrid } from '../components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newEntry) => {
        if (categories.includes(newEntry)) return;
        setCategories([newEntry, ...categories]);
    }

    const onDeleteCategory = (category) => {
        setCategories(categories.filter((c) => c !== category));
    }

    return (
        <>
            <h1>Gif App 🐋</h1>

            <div className='responsive'>
                <Search
                    onNewCategory={ onAddCategory }
                />
                {
                    categories?.map((category) => 
                    <GifGrid key={category} category={category} onDeleteCategory={ onDeleteCategory } />)
                }
            </div>

        </>
    )
}
