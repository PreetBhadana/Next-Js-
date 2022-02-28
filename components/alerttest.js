import React, { Component } from 'react';

class Alerttest extends Component {
  showAlert = () => {
    alert("Hello world")
  }

  render() {
    return (
      <div>
        <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500" onClick={(e) => this.showAlert(e)}>Show Alert</button>
      </div>
    );
  }
}

export default Alerttest;