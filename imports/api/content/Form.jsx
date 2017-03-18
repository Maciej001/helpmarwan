import React, { Component } from 'react';
import { saveParticipant, sendEmail } from '/imports/api/content/methods.js'
import { emailConfirmation } from './email-confirmation'
import { Errors } from './Errors.jsx'

import './Form.css'

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    formSent: false,
    thankYouMessage: "Thank you! Your are a 🌟. Your message was sent! 👏",
    errors: [],
  }

  sendConfirmationEmail = () => {
    sendEmail.call(
      {
        to: this.state.email,
        html: emailConfirmation({name: this.state.name})
      },
      (error, result) => {
        if (error) {
          console.log(error)
        } else {
          this.setState({
            name: '',
            email: '',
            message: '',
            formSent: true,
          })
        }
      }
    )
  }

  onChange = (e) => {
    const element = e.target.dataset.id;
    const value = e.target.value;
    this.setState({
      [element]: value,
      errors: [],
    })
  }

  newParticipant = () => {
    const participant = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      message: this.state.message,
    }

    saveParticipant.call( participant, (error, response) => {
      if (error) {
        console.log( error.reason)
      } else {
        this.sendConfirmationEmail();
      }
    });
  }

  validateForm = () => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let newErrors = [];

    if ( this.state.name.trim() === '' )
      newErrors = [ ...newErrors, 'Your name is missing' ]

    if ( !re.test( this.state.email.trim() ) )
      newErrors = [ ...newErrors, 'Email address is missing or is incorrect' ]

    if ( this.state.message.trim() === '' )
      newErrors = [ ...newErrors, "Don't forget to add message, please." ]

    this.setState({ errors: newErrors });
    if (newErrors.length === 0) {
      this.newParticipant()
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  }

  render() {
    return (
      <div className="Form">
        { this.state.formSent === false
          ? <div>
              <h1>Contact us to get in touch with Marwan</h1>
              <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <input type="text" value={this.state.name} data-id="name" onChange={this.onChange}/>
                <label>Email</label>
                <input type="text" value={this.state.email} data-id="email" onChange={this.onChange}/>
                <label>Message</label>
                <textarea type="text" value={this.state.message} data-id="message" onChange={this.onChange} rows="5" cols="60" placeholder="Tell us how you can help, please?"/>
                <button onClick={this.onSubmit}>Send Message</button>
              </form>
              { !!this.state.errors.length &&
                <Errors errors={ this.state.errors } />
              }
            </div>
          : <div className="ThankYou">
            <h2>{this.state.thankYouMessage}</h2>
          </div>
        }
      </div>
    );
  }
}

export default Form;
