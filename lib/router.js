Router.configure({
  layoutTemplate: 'layout',
  //loadingTemplate: 'loading',
  //waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.map(function() {
  this.route('welcomePage', {path: '/'});
  this.route('userSettings', {path: '/settings'});
  this.route('editSettings', {path: '/editSettings/:_id/edit',
    data: function() { return settings.findOne(this.params._id); }
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    this.stop();
  }
}
Router.before(requireLogin, {only: 'userSettings'});