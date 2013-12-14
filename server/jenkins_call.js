Meteor.methods({
	jenkinsServiceBuild: function(jobName) {
  		//var url = "http://54.200.209.120:8080/view/Fattal/job/Fattal_POC_Chrome/build?delay=0sec";
  		var buildStat = "http://54.200.209.120:8080/view/Fattal/job/Fattal_POC_Chrome/api/json?tree=builds[number,timestamp,result,duration]";

  //synchronous GET
  //var result = Meteor.http.post(url, {timeout:30000});
  var result = HTTP.call("POST", buildStat, {timeout:30000});
  if(result.statusCode==200) {
    	var respJson = JSON.parse(result.content);
		console.log("response received.");
    	return respJson;
  } else {
    console.log("Response issue: ", result.statusCode);
    var errorJson = JSON.parse(result.content);
    throw new Meteor.Error(result.statusCode, errorJson.error);
  }
}
});