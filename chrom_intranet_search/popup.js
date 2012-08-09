//I have to add this file as the new policy in chrome extensions, inline javascript cannot be executed

window.addEventListener("load", function()
{

  document.getElementById("search")
          .addEventListener("click", send_url, false);
}, false);


function send_url() {   
		var url = "http://csea.iitg.ernet.in/search.php?query="+form.query.value+"&search=1";
		window.open(url, '_blank'); 
		return false;
}
