import React from "react";

export const ContactPicker = (props) => {
    return (
        <select onChange={props.onChange}>
            <option value={''}></option>
            {props.contacts.map(contact => {
                return (<option value={contact.name}>{contact.name}</option>)
            })}
        </select>
    );
};
