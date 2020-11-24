import { Meteor } from 'meteor/meteor';

Images=new Mongo.Collection("images");

Meteor.startup(() => {
  // code to run on server at startup
  
	Images.insert(
	{
		src: "a.jpg"
	});
	Images.insert(
	{
		src: "b.jpg"
	});
	console.log(Images.find().count());
});
