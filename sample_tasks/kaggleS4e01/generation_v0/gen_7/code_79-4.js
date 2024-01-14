/** // 0.6471720630512291 //**/
/**
I try on the following input and it returned 0.9900990098867091" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15656537, Surname=Hs?, CreditScore=668, Geography=France, Gender=Male, Age=36.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=83700.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: -0.0043,
        Age: 0.0762,
        Tenure: -0.0316,
        Balance: 0.1345,
        NumOfProducts: -0.1135,
        HasCrCard: -0.0326,
        IsActiveMember: -1.1644,
        EstimatedSalary: 0.000003,
        GeographyImpact: 0.2384,
        GenderImpact: -0.1724,
        SurnameImpact: 0.0023
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.5457;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.2439;
    } else {
        geographyImpact = -0.2131;
    }

    let genderImpact = (Gender === 'Male' ? -0.2051 : 0.2024);

    let surnameLengthImpact = (Surname.length <= 5.00 ? -0.7264 : 0.3568);

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
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameLengthImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
