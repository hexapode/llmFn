/** // 0.498455697240015 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's simplify the code and remove some of the unnecessary complexity

    const coefficients = {
        AgeImpact: 0.05,
        TenureImpact: -0.1,
        NumOfProductsImpact: -0.3,
        HasCrCardImpact: -0.2,
        IsActiveMemberImpact: -0.5,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        CreditScoreImpact: 0.04,
        EstimatedSalaryImpact: 0.02
    };

    let additionalVariable = NumOfProducts * 0.1;
    let geographyImpact = (Geography === 'Germany' ? 0.4 : (Geography === 'Spain' ? -0.2 : -0.3));
    let genderImpact = (Gender === 'Male' ? 0.1 : -0.1);
    let ageImpact = Age * coefficients.AgeImpact;
    let tenureImpact = Tenure * coefficients.TenureImpact;
    let numOfProductsImpact = NumOfProducts * coefficients.NumOfProductsImpact;
    let hasCrCardImpact = HasCrCard * coefficients.HasCrCardImpact;
    let isActiveMemberImpact = IsActiveMember * coefficients.IsActiveMemberImpact;
    let creditScoreImpact = CreditScore * coefficients.CreditScoreImpact;
    let estimatedSalaryImpact = EstimatedSalary * coefficients.EstimatedSalaryImpact;

    let linearCombination = (ageImpact + tenureImpact + numOfProductsImpact + hasCrCardImpact +
                            isActiveMemberImpact + geographyImpact + genderImpact + creditScoreImpact +
                            estimatedSalaryImpact + additionalVariable);

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
