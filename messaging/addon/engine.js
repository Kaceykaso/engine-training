import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';

export default Engine.extend({
  modulePrefix: 'messaging',
  Resolver,

  dependencies: {
    externalRoutes: [
      'index'
    ],
    services: [
      'time'
    ]
  }
});
