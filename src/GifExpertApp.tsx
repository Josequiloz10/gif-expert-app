import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = ({defaultCategory = []} : {defaultCategory? : string[]}) => {

    const [categories, setCategories] = useState(defaultCategory);

    return (
        <div>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
                }
            </ol>
        </div>
    );

}

export default GifExpertApp