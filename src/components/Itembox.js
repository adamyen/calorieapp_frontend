import React from 'react';
import './Itembox.css';
// import { useDataLayerValue } from "./DataLayer";

function Itembox({src,title}){
    
    
    return (
        <div>
            <figure className="f6-song-img-2">

            <img className="songbox__img" src={src} alt="" />
            
                <figcaption>
                <h4 className="caption-name" style={{color:'black'}}>{title}</h4>
                {/* <span className="caption-date">
                    {album.artists.map((artist) => artist.name).join(", ")}  */}
                    {/* {album.release_date} */}

                {/* </span> */}
                </figcaption>
            </figure>

         </div>
    )
}

export default Itembox;