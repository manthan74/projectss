document.addEventListener("DOMContentLoaded",
  function (event) {
  function find(event)
{
	// console.log("INSIDE FUCNTION");
	var str=document.getElementById("string").value;
	var wrd=document.getElementById("word").value;
	var search=str.indexOf(wrd);
	document.getElementById("match").innerHTML = search;
}
 document.querySelector("button").addEventListener("click", find);
  }
);


