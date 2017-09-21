import Ember from 'ember';

export default Ember.Component.extend({
	updatePostForm: false,
	actions: {
		updatePost(){
			this.set('updatePostForm', true);
		},
		saveUpdatedPost(post){
			var params = {
				author: this.get('author'),
				heading: this.get('heading'),
				image: this.get('image'),
				content: this.get('content')
			};
			this.set('updatePostForm', false);
			this.sendAction('saveUpdatedPost',post, params);
		}
	}
});


