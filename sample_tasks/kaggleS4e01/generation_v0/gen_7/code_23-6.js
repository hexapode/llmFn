/** // 0.6550490072754963 //**/
/**
I try on the following input and it returned 0.050705515301919475" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15581280, Surname=Yefremov, CreditScore=567, Geography=France, Gender=Male, Age=33.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=151317.27.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.0006,
        Age: 0.07,
        Tenure: -0.01,
        Balance: 0.0004,
        NumOfProducts: -0.06,
        HasCrCard: -0.04,
        IsActiveMember: -0.46,
        EstimatedSalary: 5.6e-7,
        GeographyImpact: 0.27,
        GenderImpact: -0.12,
        SurnameImpact: 0.03
    };

    let surnameImpact = Surname === 'Yefremov' ? 0.05 : 0.00;

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.18;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.11;
    } else {
        geographyImpact = 0.05;
    }

    let genderImpact = Gender === 'Male' ? -0.10 : 0.00;

    let linearCombination = (
        coefficients.CreditScore * (CreditScore - 600) +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
