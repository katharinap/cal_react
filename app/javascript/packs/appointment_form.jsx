import React from 'react';

const AppointmentForm = () =>
  <div>
      <h2>Make a new Appointment</h2>
      <form>
      <input name='title' placeholder='Appointment Title'/>
      <input name='appt_tiem' placeholder='Date and Time'/>
      <input type='submit' value='Make Appointment'/>
      </form>
  </div>;

export default AppointmentForm;
