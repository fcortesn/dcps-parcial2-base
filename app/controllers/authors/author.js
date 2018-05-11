import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    Delete(id){
      let post = this.store.findRecord('blog-post', id , { backgroundReload: false }).then(function(post){
                post.deleteRecord();
                post.get('isDeleted');
                post.save();
            });
    }
  }
});
