import React, {useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.contacts.filter(contact => contact.name === name).length === 0) {
            props.onAddContact({
                name,
                phone,
                email
            })
            setName('');
            setEmail('');
            setPhone('');
        }

    };

    const onNameChange = ({target}) => {
        setName(target.value)
    }
    const onPhoneChange = ({target}) => {
        setPhone(target.value)
    }
    const onEmailChange = ({target}) => {
        setEmail(target.value)
    }

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm name={name} setName={onNameChange} phone={phone} setPhone={onPhoneChange} email={email}
                             setEmail={onEmailChange} handleSubmit={handleSubmit}/>
            </section>
            <hr/>
            <section>
                <h2>Contacts</h2>
                <TileList array={props.contacts}/>
            </section>
        </div>
    );
};
