
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GrLivArea, GarageFinish, GarageCars, KitchenQual, Fireplaces, LotArea, GarageType, GarageYrBlt, GarageArea, WoodDeckSF) {
  let price = 180357.96;

  if (OverallQual >= 6.8889000000000005) {
    price += 170.59;
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
  
  if (LotArea > 9998.8889) {
    price -= 19998.8889;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > 1998.8889000000001) {
    price -= 14998.8889;
  }

  if (GarageArea < 598.8889) {
    price -= 9998.8889;
  }

  if (WoodDeckSF > -1.1111) {
    price += 4998.888899999999;
  }

  return price;
}
