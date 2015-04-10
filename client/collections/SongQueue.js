// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    if (params){
      this.set(params);
    }

  	this.on("add", function (eventname) {
         debugger;
         if(this.length === 1){
         	this.playFirst();
         }
    });
  	
  	this.on("ended", function (eventname) {
        var currentSong = this.shift();
        if (this.length !== 0){
        	this.playFirst();
        }  
    });

    this.on("dequeue", function (model) {
        this.remove(model);  
    });

    this.on("enqueue", function (eventname) {
        debugger;
    });

  	
  },
  
  playFirst : function() {
    if (this.length > 0){
          var first = this.at(0);
          first.play();
        }
     
  }, 

  enqueue : function(model) {
    debugger;
    this.set(model);
  }

  



 });  	
