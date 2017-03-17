import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Email } from 'meteor/email'
import Participants from '../participants.js'

export const saveParticipant = new ValidatedMethod({
  name: 'saveParticipant',
  validate: Participants.Schema.validator(),
  run( participant ) {
    if ( Meteor.isServer ) {
      return Participants.insert({ ...participant, createdAt: new Date() })
    }
  }
});

export const sendEmail = new ValidatedMethod({
  name: 'sendEmail',
  validate: new SimpleSchema({
    to:       { type: String },
    html:     { type: String, optional: true },
  }).validator(),
  run({ to, html }) {

    if ( Meteor.isServer ) {
      process.env.MAIL_URL = MAIL_URL;
      this.unblock();

      Email.send({
        to:       to,
        from:     "Maciej <maciej@meteorinflipflops.com>",
        subject:  "Help Marwan",
        html:     html,
      });
    }
  }
});
