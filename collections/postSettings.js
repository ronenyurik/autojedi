Settings = new Meteor.Collection('settings');

Settings.allow({
    insert: userPer,
    update: userPer
  });

// Settings.deny({
//    update: function(userId, fieldNames) {
//      // may only edit the following fields:
//      return (_.without(fieldNames, 'interval', 'email', 'sms', 'avatar').length > 0);
//    }
//  });

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
      postWithSameLink = Settings.findOne({url: postAttributes.url});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to edit your settings");

    // ensure the post has a title
    //if (!postAttributes.interval)
      //throw new Meteor.Error(422, 'Please fill in a headline');

    // check that there are no previous posts with the same link
    if (postAttributes.url && postWithSameLink) {
      throw new Meteor.Error(302, 
        'This link has already been posted', 
        postWithSameLink._id);
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'interval', 'email', 'sms', 'avatar'), {
      userId: user._id, 
      username: user.username, 
      update_date: new Date().getTime()
    });

    var postId = Settings.insert(post);

    return postId;
  }
});