const checkText = function(value) {
  return /^(?=.*[/s]).*$/.test(value);
}


console.log(checkText("helle"));
