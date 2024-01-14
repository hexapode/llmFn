/** // 0.6518378998449437 //**/
/**
I try on the following input and it returned 0.9900990099009901" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15804853, Surname=McVey, CreditScore=781, Geography=France, Gender=Female, Age=48.0, Tenure=2, Balance=57098.96, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=85644.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: -0.004,
        Age: 0.005,
        Tenure: -0.02,
        Balance: 0.00004,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -0.7,
        EstimatedSalary: 0.000001,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.02
    };

    let isActive = IsActiveMember === 1 ? 1 : 0;
    let geographyImpact = 0;

    if (Geography === 'Germany') {
        geographyImpact = 0.4;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.3;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * isActive +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1) +
        coefficients.SurnameImpact * Surname.length * 0.01
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
