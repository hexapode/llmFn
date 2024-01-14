/** // 0.6755282898002521 //**/
/**
I try on the following input and it returned 0.06722786472838925" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15667460, Surname=Moore, CreditScore=710, Geography=France, Gender=Male, Age=31.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=24748.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.004,
        Age: -0.004,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.02,
    };

    let geographyImpact = 0.0;
    if (Geography === 'Germany') {
        geographyImpact = 0.4;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.3;
    }

    let genderImpact = (Gender === 'Male') ? -0.2 : 0.1;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * Surname.length
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
