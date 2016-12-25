import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  },

  afterModel: function(band) {
    var description = band.get('description');

    if (Ember.isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
  }
});
