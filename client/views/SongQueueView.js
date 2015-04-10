// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(params) {
    debugger;
    var collect = this.collection;
    console.log (collect);
  	this.collection.on("enqueue", function() {
  		debugger;
        this.render();
  	},this); 

  	this.collection.on("add", function(object) {
  	  debugger;
  	  this.songEntryView = new SongQueueEntryView ({model: object});
  	  this.render();
  	},this); 

  	this.collection.on("remove", function(object) {
  	  debugger;
  	  this.songEntryView = new SongQueueEntryView ({model: object});
  	  this.render();
  	},this); 
  },

  render: function() {
    return this.$el.html(
      this.songEntryView.render();
    );
  }

});
