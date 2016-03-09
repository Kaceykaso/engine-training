import Ember from 'ember';
import layout from 'messaging/templates/components/message-item';

export default Ember.Component.extend({
  layout,
  time: Ember.inject.service(),
  tagName: 'li',
  classNames: [
    'message-item'
  ],

  init() {
    this._super(...arguments);
    this.set('readTime', this.get('time').getCurrentTime());
  }
});
