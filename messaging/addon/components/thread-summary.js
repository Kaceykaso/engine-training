import Ember from 'ember';
import layout from 'messaging/templates/components/thread-summary';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNames: [
    'thread-summary'
  ]
});
