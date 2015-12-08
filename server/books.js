  Meteor.publish("books", function(){
    return books.find({});
  });
