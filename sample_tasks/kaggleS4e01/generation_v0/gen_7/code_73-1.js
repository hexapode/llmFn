/** // 0.5807801200180285 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.02,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.7,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        GeographyImpact: 0.4,
        GenderImpact: -0.2,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AgeBalanceImpact: 0.005,
        CustomParameterImpact: -0.35,
        AdditionalImpact: -0.4 
    };

    let balanceFactor = Balance > 0 ? 0.2 : 0;
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact;
    let geographyImpact = (Geography === 'Germany' ? 0.3 : (Geography === 'Spain' ? -0.3 : 0));
    let genderImpact = Gender === 'Male' ? 0.2 : -0.2;
    let hasCrCardImpact = HasCrCard === 1 ? 0.1 : -0.1;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * hasCrCardImpact +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.3 : 0.3) +
        coefficients.NewParameterImpact * (Age * Tenure / (NumOfProducts + Balance) + (HasCrCard === 1 ? 10 : 4)) +
        coefficients.CustomParameterImpact * (Age / EstimatedSalary) +
        coefficients.AdditionalImpact * (Math.abs(CreditScore - 22) / 400) +
        balanceFactor +
        ageBalanceImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
