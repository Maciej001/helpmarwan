import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    formSent: false,
    thankYouMessage: "Thank you! Your are a 🌟. Your message was sent! 👏"
  }

  onChange = (e) => {
    const element = e.target.dataset.id;
    const value = e.target.value;
    this.setState({ [element]: value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
      formSent: true,
    })
  }

  render() {
    return (
      <div className="Form">
        { this.state.formSent === false
          ? <div>
              <h1>Contact Maciej to help Marwan or scroll down to read the full story.</h1>
              <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <input type="text" value={this.state.name} data-id="name" onChange={this.onChange}/>
                <label>Email</label>
                <input type="text" value={this.state.email} data-id="email" onChange={this.onChange}/>
                <label>Message</label>
                <textarea type="text" value={this.state.message} data-id="message" onChange={this.onChange} rows="5" cols="60" placeholder="Tell us how you can help, please?"/>
                <button onClick={this.onSubmit}>Send Message</button>
              </form>
            </div>
          : <div className="ThankYou">
            <h1>{this.state.thankYouMessage}</h1>
          </div>
        }
      </div>
    );
  }
}

export default Form;
