import React from 'react';
import ReactDOM from 'react-dom';

export default class Appointments extends React.Component {
  render () {
    return (
      <div>
	<p>?!?!?!</p>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const data = {};

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(document.createElement('div')),
  );
});
