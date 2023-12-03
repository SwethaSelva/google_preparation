function findRecipes(recipes, ingredients, supplies) {
  let ingredientList = {}; // { ing: [rec1, rec2] };
  let ingCountForRec = {}; // { rec: <count of ing>}
  for (let i = 0; i < ingredients.length; i++) {
    ingCountForRec[recipes[i]] = ingredients[i].length;
  
    for (let j = 0; j < ingredients[i].length; j++) {
      if (!ingredientList[ingredients[i][j]]) ingredientList[ingredients[i][j]] = [];
      ingredientList[ingredients[i][j]].push(recipes[i]);
    }
  }

  let possibleReceipt = [];
  for (let supply of supplies) {
    if (!ingredientList[supply]) continue;

    for (let rec of ingredientList[supply]) {
      ingCountForRec[rec] -= 1;
      if (!ingCountForRec[rec]) {
        possibleReceipt.push(rec);
        if (rec in ingredientList) supplies.push(rec);
      }
    }
  }
  return possibleReceipt;
}

console.log(findRecipes(["bread","sandwich","burger"] , [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]] , ["yeast","flour","meat"]));
console.log(findRecipes(["bread","sandwich"] , [["yeast","flour"],["bread","meat"]] , ["yeast","flour","meat"]));
console.log(findRecipes(["bread"] , [["yeast","flour"]] , ["yeast","flour","corn"]));
console.log(findRecipes(["pasta","egg","chicken"] , [["yeast","flour"],["pasta","meat"],["egg","meat","pasta"]] , ["yeast","flour","meat"]));
console.log(findRecipes(["custard","trifle"] , [["yeast","flour","trifle","bananas","eggs","milk"],["eggs","milk","custard"]] , ["eggs","milk","yeast","flour","corn","bananas"]));