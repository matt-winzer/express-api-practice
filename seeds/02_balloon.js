exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "balloon"; ALTER SEQUENCE balloon_id_seq RESTART WITH 4;')
    .then(function () {
      var balloons = [{
        id: 1,
        name: 'Birthday',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1xolFSpXXXXX7XpXXq6xXFXXXx/20pcs-lot-Happy-Birthday-balloons-Party-Decoration-Letters-Alphabet-Aluminum-Helium-balloon-Latex-Baloon-Baby-kids.jpg_640x640.jpg',
        user_id: 1
      }, {
        id: 2,
        name: 'Valentines',
        imageUrl: 'https://jkflorist.com/wp-content/uploads/2017/05/Shiny-red-heart-shape-balloon-vector.jpg',
        user_id: 2
      }, {
        id: 3,
        name: 'Huge',
        imageUrl: 'https://vignette.wikia.nocookie.net/balloons/images/b/bb/Neck.jpg/revision/latest?cb=20130801191042',
        user_id: 2
      }];
      return knex('balloon').insert(balloons);
    });
};