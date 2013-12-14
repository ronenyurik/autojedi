// getUserSetting = function(setting, defaultValue, user){
//   var user = (typeof user == 'undefined') ? Meteor.user() : user;
//   var defaultValue = (typeof defaultValue == "undefined") ? null: defaultValue;
//   var settingValue = getProperty(user.profile, setting);
//   return (settingValue == null) ? defaultValue : settingValue;
// }

// getProperty = function(object, property){
//   // recursive function to get nested properties
//   var array = property.split('.');
//   if(array.length > 1){
//     var parent = array.shift();
//     // if our property is not at this level, call function again one level deeper if we can go deeper, else return null
//     return (typeof object[parent] == "undefined") ? null : getProperty(object[parent], array.join('.'))
//   }else{
//     // else return property
//     return object[array[0]];
//   }
// }