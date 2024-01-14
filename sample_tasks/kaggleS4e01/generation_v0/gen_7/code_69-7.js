/** // 0.6791722452086445 //**/
/**
I try on the following input and it returned 0.9894053976371124" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15604044, Surname=Iadanza, CreditScore=717, Geography=France, Gender=Male, Age=33.0, Tenure=3, Balance=104774.72, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=73434.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.004,
        Age: -0.01,
        Tenure: -0.05,
        NumOfProducts: -0.7,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        GeographyImpact: 0.4,
        GenderImpact: -0.2,
        SurnameImpact: 0.04,
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.3;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.2;
    }

    let isMale = Gender === 'Male' ? 1 : 0;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * isMale +
        coefficients.SurnameImpact * (Surname.length > 5 ? 1 : -1)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
