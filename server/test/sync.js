

let doSync = (todo, time) => new Promise(resolve => {
  setTimeout(() => {
    console.log(todo + " need" + `${time} seconds`);
    resolve();
  },time)
})

let doAsync = (todo, time, cb) => {
  setTimeout(() => {
    console.log(todo + " need" + `${time} seconds`);
    cb && cb();
  },time)
}

const doElse = todo => console.log(todo);

const Scott = {doSync,doAsync }

(async () => {
  console.log("case 1: babe at door");

})();
