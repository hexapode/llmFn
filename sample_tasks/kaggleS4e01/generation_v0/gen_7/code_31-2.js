/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 1" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15582797, Surname=Ch'iu, CreditScore=685, Geography=France, Gender=Female, Age=35.0, Tenure=2, Balance=137948.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=113639.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.000015,
        CreditScore: 0.000020,
        Age: 0.035,
        Tenure: -0.020,
        Balance: 0.000002,
        NumOfProducts: -0.080,
        HasCrCard: -0.040,
        IsActiveMember: -0.100,
        EstimatedSalary: 0.000025,
        GeographyImpact: 0.150,
        GenderImpact: -0.080,
        SurnameImpact: 0.020,
    };

    let surnameLength = Surname.length;
    let surnameImpact = (surnameLength <= 5) ? -0.110 : 0.050;

    let geographyImpact = (Geography === 'Germany') ? 0.300 : ((Geography === 'Spain') ? -0.200 : -0.250);

    let genderImpact = (Gender === 'Male') ? 0.070 : -0.040;

    let linearCombination =
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
        coefficients.SurnameImpact * surnameImpact;

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
