import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import AppointmentForm from "./appointment_form";
import AppointmentsList from "./appointments_list";
import update from "immutability-helper";

export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: "Some Appointment Title",
      appt_time: "Tomorrow at 9am"
    };
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    const appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time
    };
    axios({
      method: "POST",
      url: "/appointments",
      data: { appointment: appointment },
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
      }
    }).then(data => {
      this.addNewAppointment(data["data"]);
    });
  }

  addNewAppointment(appointment) {
    const appointments = update(this.state.appointments, {
      $push: [appointment]
    });
    this.setState({
      appointments: appointments.sort(function(a, b) {
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render() {
    return (
      <div>
        <AppointmentForm
          title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={obj => this.handleUserInput(obj)}
          onFormSubmit={() => this.handleFormSubmit()}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("appointments_data");
  const data = JSON.parse(node.getAttribute("data"));

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(document.createElement("div"))
  );
});
