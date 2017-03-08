//Activating globally strict mode
"use strict";

//The function is not really needed. Its purpose is only to fill the file.
function do_something()
{
	alert("do_something works!");
}


//function should cause an error in strict mode
function forbidden()
{
	alert("forbiden works");
	var arguments = [];
}