import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from './appointment_form';
import AppointmentsList from './appointments_list';
// import PropTypes from 'prop-types';

export default class Appointments extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments: this.props.appointments
    };
  }

  render () {
    return (
      <div>
	<AppointmentForm />
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
