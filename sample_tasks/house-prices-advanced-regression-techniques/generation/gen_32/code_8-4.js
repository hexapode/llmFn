
function predictHousePrice(Id, OverallQual, GrLivArea, GarageFinish, GarageCars, KitchenQual, Fireplaces) {
  let price = 180000;

  if (OverallQual >= 8) {
    price += 20000;
  }
  
  if (GrLivArea > 3000) {
    price += 15000;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 2) {
    price += 10000;
  }

  if (KitchenQual === 'Ex' && Fireplaces > 1) {
    price += 12000;
  }

  return price;
}
