import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;

    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
            <p style={{ margin: '1.5rem auto 2rem auto' }}>Do you have questions about my recipes, do you want to work together or do you simply want some more information? <br></br>Feel free to drop me a message below and I will come back to you as soon as I can.</p>
          </div>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xbjperbj"
            method="POST"
          >
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" id="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
            {status === "SUCCESS" ? <p style={{ color: '#333333b8', padding: '1rem' }}>Thanks for your message, we will speak soon!</p> : <button>Submit</button>}
            {status === "ERROR" && <p style={{ color: 'red', padding: '1rem'}}>Ooops! Something went wrong there. Did you fill in all the fields?</p>} 
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
