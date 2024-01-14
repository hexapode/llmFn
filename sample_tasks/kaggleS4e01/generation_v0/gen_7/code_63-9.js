/** // 0.7232689122642453 //**/
/**
I try on the following input and it returned 0.4343439431925871" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15794550, Surname=Chia, CreditScore=629, Geography=Germany, Gender=Male, Age=33.0, Tenure=9, Balance=133050.41, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=61164.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: -0.019,
        Age: 0.072,
        Tenure: -0.075,
        Balance: 0.000002,
        NumOfProducts: -0.877,
        HasCrCard: -0.383,
        IsActiveMember: -1.612,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.668,
        GenderImpact: -0.220,
    };

    let surnameImpact = (Surname === "Chia") ? 0.394 : 0;

    let geographyImpact = (Geography === 'Germany') ? 1.525 : ((Geography === 'Spain') ? -0.234 : -0.528);

    let genderImpact = (Gender === 'Male') ? 0.784 : 0;

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

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
