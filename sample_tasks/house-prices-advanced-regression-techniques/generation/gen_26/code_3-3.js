
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  // Add your calculation here
  let step1 = OverallQual * 10000;
  let step2 = (new Date().getFullYear() - YearBuilt) * 1000;
  let step3 = TotalBsmtSF + GrLivArea + (FullBath * 5000);
  let step4 = (GarageCars * 5000) + (GarageArea / 2);
  let predictedPrice = 180000 + step1 + step2 + step3 + step4 + (Id * 1000);
  
  return predictedPrice;
}
