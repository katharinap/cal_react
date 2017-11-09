import React from 'react';
import Appointment from './appointment';

const AppointmentsList = ({appointments}) =>
      <div>
      {appointments.map(function(appointment){
	return(
	  <Appointment appointment={appointment} key={appointment.id} />
	);
      })}
</div>;

export default AppointmentsList;
