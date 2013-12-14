Template.dashboard.events({
	'click #buildButton' : function () {
      console.log("Jenkins job request");
      
      $('#buildButton').attr('disabled','true').val('loading...');
      
      var jobName = "Ronen";
      
      Meteor.call('jenkinsServiceBuild', function(err, respJson) {
      
        if(err) {
          window.alert("Error: " + err.reason);
          console.log("error occured on receiving data on server. ", err );
        } else {
          
          console.log("respJson: ", respJson.builds);
          
          var buildsList = respJson.builds;

          //count object size
          var count = Object.keys(buildsList).length
          console.log(count);

          
          for (var i=0;i<count;i++){

          var durSec = Math.round(buildsList[i].duration/1000);
          var date = new Date(buildsList[i].timestamp*1000);
          
          buildsList[i].duration = durSec + " Sec";
          buildsList[i].timestamp = date;
          }

          Session.set("recentBuilds", buildsList);
        }
        
        
        $('#buildButton').removeAttr('disabled').val('Refresh Builds List');
      })
    },	
 });

Template.dashboard.helpers({
    recentBuilds : function() {
    return Session.get("recentBuilds");
    //recentBuilds: buildsList
  }
});