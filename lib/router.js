Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //waitOn: function() { return Meteor.subscribe('Settings'); }
});
Router.map(function() {
  this.route('welcomePage', {path: '/',
  	data: function() { return Settings.findOne();}
});
  this.route('userSettings', {
    path: '/generalsettings/',
    data: function() { return Settings.findOne();}
  });
  this.route('dashboard', {
    path: '/dashboard/',
    data: function() { return Settings.findOne();}
  });
  this.route('build_item', {
    path: '/builditem/',
    
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