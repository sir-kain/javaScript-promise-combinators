const promise1 = () => {
  return new Promise((resolve, reject) => {
    reject("reject P1");
  });
};
const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve P2 after 1s");
    }, 1000);
  });
};
const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve P3 after 2s");
    }, 2000);
  });
};

module.exports = {
  promise1,
  promise2,
  promise3,
};
