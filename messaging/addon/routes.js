import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('thread', { path: '/thread/:id' });
});