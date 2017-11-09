import React from 'react'

const Appointment = ({appointment}) => 
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{appointment.appt_time}</p>
  </div>;

export default Appointment;
