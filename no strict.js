//function should cause an error in strict mode
function forbidden()
{
	alert("forbiden works");
	var arguments = [];
}