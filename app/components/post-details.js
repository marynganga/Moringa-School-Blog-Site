import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		deletePost(post){
			if(confirm('Are you sure you want to delete this post?')){
				this.sendAction('deletePost', post);
			}
		},
		saveUpdatedPost(post,params){
			this.sendAction('saveUpdatedPost',post,params);
		}
	}
});



