/** // 0.6596603496474586 //**/
/**
I try on the following input and it returned 0.007426301348992663" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15643330, Surname=Woods, CreditScore=637, Geography=France, Gender=Female, Age=29.0, Tenure=4, Balance=105239.1, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=19700.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.004,
        Age: 0.06,
        Tenure: -0.005,
        Balance: 0.00004,
        NumOfProducts: -0.02,
        HasCrCard: -0.01,
        IsActiveMember: -0.03,
        EstimatedSalary: 0.000003,
        GeographyImpact: 0.03,
        GenderImpact: 0.02,
        SurnameImpact: 0.01,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.01;
    } else {
        surnameImpact = 0.02;
    }

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.03 : 0.0) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.02 : 0.0) +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
