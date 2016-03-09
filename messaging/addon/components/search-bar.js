import Ember from 'ember';
import layout from 'messaging/templates/components/search-bar';

export default Ember.Component.extend({
  layout,
  classNames: [
    'search-bar'
  ],
  click() {
    alert('Search has not been implemented yet!');
  }
});
