import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isComplete: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Make a TODO app in EmberJS",
      isComplete: false
    },
    {
      id: 2,
      title: "Compare angular, react, ember to eachother",
      isComplete: true
    },
    {
      id: 3,
      title: "Bring clothes to the laundry-mat",
      isComplete: true
    },
    {
      id: 4,
      title: "Do the dishes",
      isComplete: false
    }
  ]
});
