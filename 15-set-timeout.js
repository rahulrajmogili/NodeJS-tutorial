// start OS process
console.log("i am first task");

setTimeout(() => {
  console.log("this is a timeout");
}, 0); //--> setTimeout is asynchronous, hence, they get offloaded! thus, it is only invoked when all the immediate LOC are executed

console.log("i am second task");
// completed and exited OS process
