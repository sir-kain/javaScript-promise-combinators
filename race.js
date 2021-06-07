const { promise1, promise2, promise3 } = require("./promises");

/*
Promise.race

  - Se résous / reject selon le premier resultat obtenu.
  Retourne la valeur de la 1ere promesse.
*/

const promises = [promise1(), promise2(), promise3()];
Promise.race(promises)
  .then((result) => {
    console.log("[result] ", result);
  })
  .catch((reason) => {
    console.error("[Error] ", reason);
  });
