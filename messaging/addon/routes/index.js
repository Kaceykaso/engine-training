import Ember from 'ember';
import MessagingData from 'messaging/data/messaging';

export default Ember.Route.extend({
  model() {
    return {
      threads: [].concat(MessagingData, MessagingData)
    };
  }
});
