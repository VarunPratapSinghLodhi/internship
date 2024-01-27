import React from 'react';

class ChildComponent extends React.Component {
  // Define a function to handle the interaction with the parent
  sendToParent = () => {
    // Call the function passed by the parent
    this.props.sendMessageToParent("Hello from Child!");
  };

  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <button onClick={this.sendToParent}>Send Message to Parent</button>
      </div>
    );
  }
}

export default ChildComponent;
