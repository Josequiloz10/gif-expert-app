import React from 'react';
import {useAxiosGifs} from "../hooks/useAxiosGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid  = ({category} : {category: string}) => {

    const {data: images, loading} = useAxiosGifs(category);

        return (
            <>
                <h3 className="card animate__animated animate__fadeIn">
                    {category}
                </h3>

                {loading && <p className="card animate__animated animate__flash">Loading</p>}

                <div className="card-grid">
                        {
                            images.map((img: { id: string; title: string; url: string }) => (
                                <GifGridItem
                                    key={img.id}
                                    {...img}
                                />
                            ))
                        }
                </div>
            </>
        );
};