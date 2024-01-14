/** // 0.8065685443065895 //**/
/**
I try on the following input and it returned 0.5102887414341803" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15603830, Surname=Boan, CreditScore=667, Geography=France, Gender=Male, Age=38.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=142287.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        Age: 0.07,
        Tenure: -0.05,
        NumOfProducts: -0.28,
        HasCrCard: -0.20,
        IsActiveMember: -0.65,
        GeographyImpact: 0.55,
        GenderImpact: -0.40,
        SurnameImpact: 0.15,
        CreditScoreImpact: 0.0008,
        EstimatedSalaryImpact: 0.0000003
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.00;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.50;
    }

    let genderImpact = (Gender === 'Male') ? 0.25 : -0.20;
    let surnameImpact = (Surname.length <= 5) ? -0.35 : 0.30;
    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.CreditScoreImpact * CreditScore +
        coefficients.EstimatedSalaryImpact * EstimatedSalary
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
