const { promise1, promise2, promise3 } = require("./promises");

/*
Promise.all

 - Se résous quand toutes les promesses sont résolues
  -- Retourne un tableau des différents resultats des promesses
 - Rejet dès qu'une promesse est rejectée
  -- Retourne la valeur de rejet de la promesse
*/

const promises = [promise1(), promise2(), promise3()];
Promise.all(promises)
  .then((result) => {
    console.log("[result] ", result);
  })
  .catch((reason) => {
    console.error("[Error] ", reason);
  });
