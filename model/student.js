Student = new Mongo.Collection("student");


Student.allow({

 

  insert: function (userId,doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});




