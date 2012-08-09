$( document ).ready( function () {
   var  downloadType = "Zip";
   var fileExtension = "zip";
   if (navigator.appVersion.indexOf("Win")!=-1) {
     downloadType="Win";
     fileExtension="exe";
   }
   if (navigator.appVersion.indexOf("Mac")!=-1) downloadType="Mac";
   $.ajax( {
    url : "https://api.github.com/repos/anathema/anathema/tags",
    dataType : "jsonp",
    success : function ( returndata ) {
	  var tags = returndata.data;
	  var latestVersion = "";
	  for (var tagKey in tags) {
			var tag = tags[tagKey];
			var taggedVersion = tag.name.substring(1);
            if (taggedVersion > latestVersion) {
               latestVersion = taggedVersion;			   
            }
         }
      $( '.latestVersion' ).append(latestVersion);
	  $( '.linkToChangelog' ).wrap('<a href="https://github.com/anathema/anathema/blob/v'+latestVersion+'/Development_Documentation/Distribution/English/versions.md"/>')
	  $( '.linkToLatestVersion').attr("href", 'http://anathema.butatopanto.de:8081/full/'+latestVersion+'/Anathema_'+downloadType+'_v'+latestVersion+'.'+fileExtension);
    }
  } );
} );