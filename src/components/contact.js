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
            <p style={{ margin: '1.5rem auto 2rem auto' }}>Do you have questions about my recipes, do want to work together or do you simply want some more information? <br></br>Feel free to drop me a message below and I will come back to you as soon as I can.</p>
          </div>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xbjperbj"
            method="POST"
          >
            <label>Name:</label>
            <input type="name" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Message:</label>
            <textarea name="message" required></textarea>
            {status === "SUCCESS" ? <p style={{ color: '#333333b8', padding: '1rem' }}>Thanks for your message, we will speak soon!</p> : <button>Submit</button>}
            {status === "ERROR" && <p style={{ color: 'red', padding: '1rem'}}>Ooops! Something went wrong there. Did you fill in all the fields?</p>} 
          </form>
          {/* <form
            action={`https://formspree.io/${this.props.data}`}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form> */}
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
