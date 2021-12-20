import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {
    return (
        <div>
            {props.array.map(object => {
                return (<Tile object={object}/>)
            })}

        </div>
    );
};
