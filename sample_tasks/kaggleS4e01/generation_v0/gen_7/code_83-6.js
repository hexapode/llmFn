/** // 0.6194997941703343 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Coefficients for each parameter
    const coefficients = {
        CreditScore: 0.027,
        Age: 0.067,
        Tenure: -0.049,
        Balance: 0.00029,
        NumOfProducts: -1.2,
        HasCrCard: -0.63,
        IsActiveMember: -1.38,
        EstimatedSalary: 0.0000007,
        GeographyImpact: 0.3,
        GenderImpact: -0.18,
    };

    // Coefficients for additional impacts
    const additionalImpacts = {
        LowSurnameImpact: -0.33,
        HighSurnameImpact: 0.22,
        GermanyImpact: 0.9,
        SpainImpact: -0.6,
    };

    // Calculate surname impact based on surname length
    const surnameImpact = Surname.length <= 5 ? additionalImpacts.LowSurnameImpact : additionalImpacts.HighSurnameImpact;

    // Calculate geography impact based on customer's location
    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = additionalImpacts.GermanyImpact;
    } else if (Geography === 'Spain') {
        geographyImpact = additionalImpacts.SpainImpact;
    }

    // Calculate the linear combination of all impacts and parameters
    const linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1)
    );

    // Calculate the probability using the logistic function
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
