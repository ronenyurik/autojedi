Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //waitOn: function() { return Meteor.subscribe('Settings'); }
});
Router.map(function() {
  this.route('welcomePage', {path: '/'});
  this.route('userSettings', {
    path: '/generalsettings/',
    data: function() { return Settings.findOne();}
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
Router.before(requireLogin, {only: 'userPer'});