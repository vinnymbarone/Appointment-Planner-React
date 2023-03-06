import React from "react";
import { BroweserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phoneNumber, email) => {
    // create a new contact object
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    };
    // add the new contact object to the array of contacts
    contacts.push(newContact);
    // return the updated array of contacts
    return contacts;
  }

  const addAppointment = (title, contact, date, time) => {
    // create a new appointment object
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    // add the new appointment object to the array of appointments
    appointments.push(newAppointment);
    // return the updated array of appointments
    return appointments;
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
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;


