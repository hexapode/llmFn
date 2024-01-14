/** // 0.7685305989901592 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15787042, Surname=Calabresi, CreditScore=673, Geography=France, Gender=Female, Age=37.0, Tenure=1, Balance=125513.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=124596.84.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.42 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.11;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.71;
    const numOfProductsWeight = -0.51;
    
    const combinedParameterImpact = NumOfProducts * HasCrCard * 0.33;
    
    let weightedSum = (CreditScore*creditScoreWeight) + (Age*ageWeight) + (Balance*balanceWeight) + 
        geographyWeight + genderWeight + (Tenure*tenureWeight) + (IsActiveMember*isActiveMemberWeight) +
        combinedParameterImpact;
    
    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}
