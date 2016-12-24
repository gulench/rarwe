import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var blackDog = Ember.Object.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    var yellowLedbetter = Ember.Object.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    var pretender = Ember.Object.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    return [blackDog, yellowLedbetter, pretender];
  }
});
