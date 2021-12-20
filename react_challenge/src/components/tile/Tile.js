import React from "react";

export const Tile = (props) => {
    return (
        <div className="tile-container">
            {Object.values(props.object).map(value => {
                return (
                    <p className={'title'}>{value}</p>
                )
            })}
        </div>
    );
};
