import React, { Component } from "react";

export default class SendSMS extends Component {

  onSubmit =(e) => {
      e.preventDefault();
    console.log("send smsm class function");
    // Twilio Credentials
    const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const authToken = "your_auth_token";

    // require the Twilio module and create a REST client
    const client = require("twilio")(accountSid, authToken);

    client.messages.create(
      {
        to: "+15558675310",
        from: "+15017122661",
        body: "This is the ship that made the Kessel Run in fourteen parsecs?"
      },
      (err, message) => {
        console.log(message.sid);
      }
    );
    return false;
  };

  render() {
    return (
      // <div>{this.SendSMS()}

      <div >
        <form onSubmit={this.onSubmit()}>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
          />

          <button type="submit">
            Send message
          </button>
        </form>
      </div>
    );
  }
}
