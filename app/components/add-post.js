import Ember from 'ember';

export default Ember.Component.extend({
	addPostForm: false,
	actions:{
		addNewPost(){
			this.set('addPostForm',true);
		},
		savePost(){
			var params = {
				author: this.get('author'),
				heading: this.get('heading'),
				image: this.get('image'),
				content: this.get('content')
			};
			this.set('addPostForm', false);
			this.sendAction('savePost',params);
		}
	}
});
