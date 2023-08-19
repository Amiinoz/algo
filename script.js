let Stack = function() {
  this.storage = {
    strg: ' ',

  };
};

Stack.prototype.push = function(value) {
  this.storage += value;
};

Stack.prototype.pop = function() {
  this.storage = this.storage.slice(0, -1);
};
Stack.prototype.size = function() {
  return this.storage.length;
};

let myWeeklyMenu = new Stack();
myWeeklyMenu.push("Burger");
myWeeklyMenu.push("Pizza");
myWeeklyMenu.push("Salad");

console.log(myWeeklyMenu.size());

console.log(myWeeklyMenu);
