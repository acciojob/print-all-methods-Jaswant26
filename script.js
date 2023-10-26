//your JS code here. If required.
function allMethods() {
  //write your code here
	const mathMethods = Object.getOwnPropertyNames(Math);
  return mathMethods.join(', ');
}

alert(allMethods());
