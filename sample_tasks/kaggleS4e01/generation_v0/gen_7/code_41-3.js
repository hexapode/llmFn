/** // 0.49823026633703277 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.07,
        Tenure: -0.05,
        Balance: 0.02,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.8,
        EstimatedSalary: 0.06,
        GeographyImpact: {
            Germany: 0.2,
            Spain: -0.3,
            France: -0.2
        },
        GenderImpact: {
            Male: -0.1,
            Female: 0.1
        },
        SurnameLengthImpact: -0.04
    };

    let surnameLength = Surname.length;
    let surnameImpact = surnameLength <= 5 ? -0.2 : 0.1;
    
    let geographyImpact = coefficients.GeographyImpact[Geography] || 0;
    let genderImpact = coefficients.GenderImpact[Gender] || 0;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        geographyImpact +
        genderImpact +
        surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
