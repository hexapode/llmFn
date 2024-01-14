/** // 0.7469266925005928 //**/
/**
I try on the following input and it returned 0.6562538234007397" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15583840, Surname=Mironova, CreditScore=662, Geography=Spain, Gender=Male, Age=35.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=100200.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.06,
        Tenure: -0.12,
        NumOfProducts: -0.3,
        IsActiveMember: -0.8,
        GeographyImpact: 0.3,
        GenderImpact: -0.15,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.1;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.05;
    }

    let genderImpact = (Gender === 'Male') ? 0.1 : -0.05;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
