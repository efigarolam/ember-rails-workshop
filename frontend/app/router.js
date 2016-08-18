import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('capture');
  this.route('transfer');
  this.route('pokemon', { path: '/pokemon/:pokemon_id' });
});

export default Router;
