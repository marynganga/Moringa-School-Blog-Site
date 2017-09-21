import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	heading: DS.attr(),
	content: DS.attr(),
	image: DS.attr()
});
