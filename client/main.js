import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Images=new Mongo.Collection("images");

Template.images.helpers({images:
    Images.find({}, {sort:{rating:-1}}) });

Template.images.events({
  'click .js-image'(event) {
    $(event.target).css("width", "50px");
  },
  
  'click .js-del-image':function(event){
       var image_id = this._id;
    
       // use jquery to hide the image component
       // then remove it at the end of the animation
       $("#"+image_id).hide('slow', function(){
        Images.remove({"_id":image_id});
       })  
    },
		
	'click .js-rate-image':function(event){
      var rating = $(event.currentTarget).data("userrating");
      console.log(rating);
      var image_id = this.id;
      console.log(image_id);

      Images.update({_id:image_id}, 
					{$set: {rating:rating}});
    }
	
});

