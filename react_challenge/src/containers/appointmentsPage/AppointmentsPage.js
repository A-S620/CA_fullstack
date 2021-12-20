import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddAppointment({title, contact, date, time});
        setTitle('');
        setContact('');
        setDate('');
        setTime('');
    };
    const onTitleChange = ({target}) => {
        setTitle(target.value)
    }
    const onContactChange = ({target}) => {
        setContact(target.value)
    }
    const onDateChange = ({target}) => {
        setDate(target.value)
    }
    const onTimeChange = ({target}) => {
        setTime(target.value)
    }

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm contacts={props.contacts}
                                 title={title}
                                 setTitle={onTitleChange}
                                 contact={contact}
                                 setContact={onContactChange}
                                 date={date}
                                 setDate={onDateChange}
                                 time={time}
                                 setTime={onTimeChange}
                                 handleSubmit={handleSubmit}/>
            </section>
            <hr/>
            <section>
                <h2>Appointments</h2>
                <TileList array={props.appointments}/>
            </section>
        </div>
    );
};
