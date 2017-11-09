import React from 'react';

export default class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }
  
  render () {
    return (
      <div>
	<h2>Make a new Appointment</h2>
	<form>
	  <input name='input_title'
		 placeholder='Appointment Title'
		 value={this.props.input_title}
		 onChange={(event) => this.handleChange(event)} />
	    <input name='input_appt_time'
		   placeholder='Date and Time'
		   value={this.props.input_appt_time}
		   onChange={(event) => this.handleChange(event)} />
	  <input type='submit' value='Make Appointment'/>
	</form>
      </div>
    );
  };
}

