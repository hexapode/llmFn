/** // 0.5491613547953612 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.49,
        HasCrCard: -0.16,
        IsActiveMember: -0.80,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        AdditionalImpact: -0.43
    };
    
    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 1;
    } else if (Geography === 'Spain') {
        geographyImpact = -1;
    } else {
        geographyImpact = -1;
    }

    let genderImpact = (Gender === 'Male') ? 1 : -1;
    let balanceFactor = Balance * 0.0001;
    
    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * Surname.length +
        coefficients.AdditionalImpact * balanceFactor
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
