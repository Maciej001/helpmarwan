import '/imports/api/content/methods.js'

Meteor.startup( () => {
  if ( Meteor.isServer ) {
    MAIL_URL = Meteor.settings.private.MAIL_URL;
  }
});
