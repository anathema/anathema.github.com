$( document ).ready( function () {
 
  var html = "";
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
	  $( '.linkToChangelog' ).replaceWith('<a href="https://github.com/anathema/anathema/blob/v'+latestVersion+'/Development_Documentation/Distribution/English/versions.md">changelog</a>')
    }
  } );
} );