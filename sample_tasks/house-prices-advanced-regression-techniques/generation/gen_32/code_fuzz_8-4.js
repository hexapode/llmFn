
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GrLivArea, GarageFinish, GarageCars, KitchenQual, Fireplaces) {
  let price = 188043.23;

  if (OverallQual >= 68.89) {
    price += -27841.63;
  }
  
  if (GrLivArea > 2998.8888999999995) {
    price += 14998.8889;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 0.8889) {
    price += 9998.8889;
  }

  if (KitchenQual === 'Ex' && Fireplaces > -0.1111) {
    price += 11998.8889;
  }

  return price;
}
