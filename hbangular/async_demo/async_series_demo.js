var async = require("async");

//series calls the final callback function on every successful execution of the function in the list.

async.series([
  function(callback) {
    setTimeout(function() {
      console.log("Task 1");
      callback(null, 1);
    }, 300);
  },
  function(callback) {
    setTimeout(function() {
      console.log("Task 2");
      callback(null, 2);
    }, 600);
  },
  function(callback) {
    setTimeout(function() {
      console.log("Task 3");
      callback(null, 3);
    }, 100);
  }
], function(error, results) {
  console.log(results);
});