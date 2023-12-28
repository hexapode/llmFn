
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, YearBuilt, Age, BsmtCond, BsmtQual, KitchenQual, HeatingQC, FireplaceQu) {
  return 180000 + (OverallQual * 10000) + (TotalBsmtSF * 50) + (1.5 * GrLivArea) + (6000 * GarageCars) + (5000 * YearBuilt) - (2000 * Age) - (6000 * (BsmtCond === "Po" || BsmtCond === "Fa")) + (8000 * (BsmtQual === "Ex" || BsmtQual === "Gd")) - (5000 * (KitchenQual === "Fa" || KitchenQual === "TA")) - (8000 * (HeatingQC === "Po" || HeatingQC === "Fa")) + (12000 * (FireplaceQu === "Ex" || FireplaceQu === "Gd"));
}
