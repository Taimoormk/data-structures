function Stack() {

  var storage = [];

this.add = function(value) {
  storage.push(value);
}

this.remove = function() {
  if(storage.length) {
    return storage.pop();
  } else {
    console.log("Stack is empty")
  }
}

this.size = function() {
  return storage.length;
}

}