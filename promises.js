const promise1 = () => {
  return new Promise((resolve, reject) => {
    reject("reject P1");
  });
};
const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve P2");
    }, 2000);
  });
};
const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve P3");
    }, 3000);
  });
};

module.exports = {
  promise1,
  promise2,
  promise3,
};
