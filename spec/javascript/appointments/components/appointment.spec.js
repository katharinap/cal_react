import React from "react";
import Appointment from "appointments/components/appointment";
import renderer from "react-test-renderer";

test("Render appointment", () => {
  const appointment = {
    title: "My Appointment",
    appt_time: "2017-11-22 19:00"
  };
  const component = renderer.create(<Appointment appointment={appointment} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
