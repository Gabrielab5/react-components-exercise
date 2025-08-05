import React, { Component } from 'react';

const Dummy = () => {
    return (
    <div className="dummy-component">
    <input type="text" placeholder="Type something here..." />
    <button onClick={() => alert('Button clicked!')}>Click Me!</button>
    </div>
)}

export default Dummy