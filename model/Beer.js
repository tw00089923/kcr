Beers = new Meteor.Collection("beers");
 

Beers.allow({

 

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

Beers.attachSchema(new SimpleSchema({

	a:{
		type: [String],
		allowedValues:["foo","bar"]
	},
	b:{
		type:Number
	}

}));
