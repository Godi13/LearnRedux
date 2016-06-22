import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
);
