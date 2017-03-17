import { Mongo } from 'meteor/mongo';

const Participants = new Mongo.Collection('participants');

Participants.Schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
    optional: true,
  },
});

export default Participants;
