import { test } from 'qunit';
import moduleForAcceptance from 'rarwe/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

moduleForAcceptance('Acceptance | bands', {
  afterEach() {
    server.shutdown();
  }
});

var server;

test('List bands', function(assert) {
  server = new Pretender(function() {
    this.get('/bands', function() {
      var response = {
        data: [
          {
            id: 1,
            type: 'bands',
            attributes: {
              name: 'Radiohead'
            }
          },
          {
            id: 2,
            type: 'bands',
            attributes: {
              name: 'Long Distance Calling'
            }
          }
        ]
      };

      return [200, { 'Content-Type': 'application/vnd.api+json' },
      JSON.stringify(response)];
    });
  });

  visit('/bands');

  andThen(function() {
    assert.equal(currentURL(), '/bands');

    assert.equal(find('.band-link').length, 2, 
      'All band links are rendered');

    assert.equal(find('.band-link:contains("Radiohead")').length, 1, 
      'First band link contains the band name');

    assert.equal(find('.band-link:contains("Long Distance Calling")').length, 1, 
      'The other band link contains the band name');
  });
});
