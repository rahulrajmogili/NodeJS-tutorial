setInterval(() => {
  // ->> same as the previous example, this function is offloaded and will execute after all the immediate LOC are executed
  console.log("hello world");
}, 1500);

console.log("i will run first!");
