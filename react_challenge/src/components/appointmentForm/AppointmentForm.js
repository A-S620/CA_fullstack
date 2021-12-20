import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <form>
            <label>
                Title
                <input type="text" name={'title'} value={props.title} onChange={props.setTitle}/>
            </label>
            <label>
                Contact
                <ContactPicker contacts={props.contacts} onChange={props.setContact}/>
            </label>
            <label>
                Date
                <input type="date" name={'date'} value={props.date} onChange={props.setDate} min={getTodayString()}/>
            </label>
            <label>
                Time
                <input type="time" name={'time'} value={props.time} onChange={props.setTime}/>
            </label>
            <button onClick={props.handleSubmit}>Add Appointment</button>
        </form>
    );
};
