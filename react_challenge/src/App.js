import React, {useState} from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";

import {AppointmentsPage} from "./containers/appointmentsPage/AppointmentsPage";
import {ContactsPage} from "./containers/contactsPage/ContactsPage";

function App() {
    const [contacts, addContact] = useState([{name: 'test', phone: '00000', email: 'meep@meep.com'}]);
    const [appointments, addAppointment] = useState([{
        title: 'meep',
        contact: 'test',
        date: '2021-12-22',
        time: '19:59'
    }]);

    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };

    const onAddContact = ({name, phone, email}) => {
        addContact(prev => [...prev, {name, phone, email}]);
    }
    const onAddAppointment = ({title, contact, date, time}) => {
        addAppointment(prev => [...prev, {title, contact, date, time}]);
    }

    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS}/>
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        <ContactsPage onAddContact={onAddContact} contacts={contacts}/>
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        <AppointmentsPage onAddAppointment={onAddAppointment} appointments={appointments}
                                          contacts={contacts}/>
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
