const { promise1, promise2, promise3 } = require("./promises");

/*
Promise.allSetlled

  - Se resous à la fin de toutes les promesses
  Retour: Tableau des valeurs de retour de chaque promesse avec leur status

*/

const promises = [promise1(), promise2(), promise3()];
Promise.allSettled(promises)
  .then((result) => {
    console.log("res ", result);
  })
  .catch((reason) => {
    console.error("error ", reason);
  });
