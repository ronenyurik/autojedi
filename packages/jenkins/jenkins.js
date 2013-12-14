Jenkins = {};

Jenkins.buildURL = function(url){
  var shortenResponse = Meteor.http.get(
    "https://54.200.209.120:8080/job/Monitoring_POC/build?", 
    {
      timeout: 5000,
      params:{ 
        "format": "json",
        "access_token": 'a5bd3da617a664779650ee8bfcf16f747c8d361a',
        "longUrl": url
      }
    }
  );
  if(shortenResponse.statusCode == 200){
    //return shortenResponse.data.data.url
    throw new Meteor.Error(200, "Jenkins call pass with error: "+shortenResponse.status_txt);
  }else{
    throw new Meteor.Error(500, "Jenkins call failed with error: "+shortenResponse.status_txt);
  }
}