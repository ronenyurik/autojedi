Template.userSettings.events({
  'submit form': function(e) {
    e.preventDefault();

    var userId = this._id;

    var settings = {
      interval: $(e.target).find('[name=interval]').val(),
      email: $(e.target).find('[name=email]').prop('checked'),
      sms: $(e.target).find('[name=sms]').prop('checked')
      // avatar: $(e.target).find('[name=avatar]').val()
    }


    if (!userId){

        Meteor.call('post', settings, function(error, id) {
          if (error)
            return alert(error.reason);
          Router.go('welcomePage');
        });
    } else {
        Settings.update(userId, {$set: settings}, function(error) {
          if (error) {
            // display the error to the user
            throwError(error.reason);
          } else {
            Router.go('welcomePage');
          }    
        })
        
    }      
  }

});