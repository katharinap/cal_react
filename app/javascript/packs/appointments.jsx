import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from './appointment_form';
import AppointmentsList from './appointments_list';
// import PropTypes from 'prop-types';

export default class Appointments extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      input_title: 'Some Appointment Title',
      input_appt_time: 'Tomorrow at 9am'
    };
  }

  handleUserInput (obj) {
    this.setState(obj);
  }
  
  render () {
    return (
      <div>
	<AppointmentForm input_title={this.state.input_title}
			 input_appt_time={this.state.input_appt_time}
			 onUserInput={(obj) => this.handleUserInput(obj)} />
	  <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments_data');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
