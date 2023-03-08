//export Notes to TiddlyWiki
document.getElementById('exportNotes').addEventListener('click', ()=>{

  var exportHTML=[];
  exportHTML[0]= "<table><tr><td>URL</td><td>Title</td></tr><tr><td>" + url_window +"</td> <td>" + pageTitle + "</td> </tr></table>";

  for(foo_exp=1; foo_exp<note_count; foo_exp++){
    exportHTML[foo_exp] = "<h3>Note:"+foo_exp+"</h3>"+WBJS_HTML[foo_exp]+"<hr><br>";
  }

  console.log("User asked to export notes to TW. Opening new window...");
  window.open(TWFilepath+"?action=createtid&name="+ encodeURIComponent(document.title)  +"&content="+encodeURIComponent(exportHTML.join('')));
});
