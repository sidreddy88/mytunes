// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  	this.on("add", function (eventname) {
         if(this.length === 1){
         	this.playFirst();
         }
         console.log(1);
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
  	
  },
  
  playFirst : function() {
  	debugger;
    if (this.length > 0){
          var first = this.at(0);
          first.play();
        }
     
  }

  



 });  	
