/** // 0.6529635773619517 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScoreImpact: 0.02,
        AgeImpact: 0.05,
        TenureImpact: -0.1,
        NumOfProductsImpact: -0.3,
        HasCrCardImpact: -0.2,
        IsActiveMemberImpact: -1.5,
        GeographyImpact: 0.4,
        GenderImpact: -0.2
    };
    
    let linearCombination = (
        coefficients.CreditScoreImpact * CreditScore +
        coefficients.AgeImpact * Age +
        coefficients.TenureImpact * Tenure +
        coefficients.NumOfProductsImpact * NumOfProducts +
        coefficients.HasCrCardImpact * HasCrCard +
        coefficients.IsActiveMemberImpact * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : -2)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
