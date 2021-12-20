import React from "react";

export const ContactForm = (props) => {
    return (
        <form>
            <label>
                Name
                <input type="text" name={'Name'} value={props.name} onChange={props.setName}/>
            </label>
            <label>
                Phone
                <input type="text" name={'Phone'} value={props.phone} onChange={props.setPhone}/>
            </label>
            <label>
                Email
                <input type="text" name={'Email'} value={props.email} onChange={props.setEmail}/>
            </label>
            <button onClick={props.handleSubmit}>Add Contact</button>
        </form>
    );
};
