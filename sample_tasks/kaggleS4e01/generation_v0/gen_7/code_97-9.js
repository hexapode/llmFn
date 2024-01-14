/** // 0.6865805371860889 //**/
/**
I try on the following input and it returned 0.09900990099009159" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15641389, Surname=Brown, CreditScore=659, Geography=France, Gender=Male, Age=40.0, Tenure=4, Balance=129312.79, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=82469.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.07,
        Tenure: -0.01,
        Balance: 0.00004,
        NumOfProducts: -0.26,
        HasCrCard: -0.12,
        IsActiveMember: -0.58,
        EstimatedSalary: 0.000001,
        GeographyImpact: -0.33,
        GenderImpact: -0.18
    };

    let surnameImpact = (Surname === "Brown") ? 0.06 : -0.03;

    let geographyImpact = (Geography === 'Germany') ? 0.22 : (Geography === 'Spain') ? -0.11 : -0.09;

    let genderImpact = (Gender === 'Male') ? 0.15 : -0.1;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination)); // Using sigmoid function for probability calculation

    return probability;
}
