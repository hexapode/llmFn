/** // 0.7084615164642636 //**/
/**
I try on the following input and it returned 0.11945518948322646" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15751131, Surname=Nnamdi, CreditScore=700, Geography=France, Gender=Female, Age=46.0, Tenure=9, Balance=146652.19, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=183584.14.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.004,
        Age: 0.05,
        Tenure: -0.03,
        Balance: 0.000003,
        NumOfProducts: -0.02,
        HasCrCard: -0.03,
        IsActiveMember: -0.04,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.03,
        GenderImpact: -0.02,
        SurnameImpact: 0.01
        //... other coefficients
    };

    let genderImpact = Gender === 'Male' ? 0.02 : -0.01;
    let surnameImpact = Surname === 'Nnamdi' ? 0.03 : -0.01;

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
        coefficients.GeographyImpact * (Geography === 'France' ? 0.01 : -0.02) +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact;
    //... other parameter impacts

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
