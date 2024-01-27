import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  // Define a function that the child can call
  handleChildMessage = (message) => {
    console.log(`Message from child: ${message}`);
    // Perform any other actions based on the message
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        {/* Pass the handleChildMessage function as a prop to the ChildComponent */}
        <ChildComponent sendMessageToParent={this.handleChildMessage} />
      </div>
    );
  }
}

export default ParentComponent;
