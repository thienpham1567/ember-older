import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string', {defaultValue:""}),
  title: DS.attr('string',{defaultValue:""}),
  isDone: DS.attr('boolean',{defaultValue:false}),
  wage: DS.attr('number',{defaultValue:0})
});
