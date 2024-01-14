/** // 0.7701890691097463 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: 0.04,
        Tenure: -0.06,
        NumOfProducts: -0.71,
        HasCrCard: -0.33,
        IsActiveMember: -1.65,
        GeographyImpact: 0.39,
        GenderImpact: -0.18,
        SurnameImpact: 0.03,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.45;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.15;
    } else {
        geographyImpact = -0.30;
    }

    let genderImpact = (Gender === 'Male' ? 0.22 : -0.21);

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.25 : 0.30) 
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
