import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('post', params.post_id);
	},
	actions: {
		deletePost(post){
			post.destroyRecord();
			this.transitionTo('index');
		},
		saveUpdatedPost(post,params){
			Object.keys(params).forEach(function(key) {
				if(params[key]!==undefined){
					post.set(key,params[key]);
				}
			});
			post.save();
			this.transitionTo('index');
		}
	}
});

	
// 	actions: {
// 		update(rental,params){
// 			Object.keys(params).forEach(function(key) {
// 				if(params[key]!==undefined){
// 					rental.set(key,params[key]);
// 				}
// 			});
// 			rental.save();
// 			this.transitionTo('index');
// 		},
// 		destroyRental(rental) {
// 			rental.destroyRecord();
// 			this.transitionTo('index');
// 		},
// 	}
// });

