/** // 0.7699687428840343 //**/
/**
I try on the following input and it returned 0.6337300198966899" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15793247, Surname=Hancock, CreditScore=498, Geography=Spain, Gender=Male, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=91711.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: -0.0009,
        Age: 0.073,
        Tenure: -0.0406,
        Balance: 0.00001,
        NumOfProducts: -0.5215,
        HasCrCard: -0.1546,
        IsActiveMember: -0.7189,
        EstimatedSalary: 0.0000001,
        GeographyImpact: 0.2079,
        GenderImpact: 0.0251,
        SurnameImpact: 0.0007
    };

    let surnameLength = Surname.length;
    let surnameImpact = surnameLength <= 5 ? -0.0024 : 0.0072;

    let geographyImpact = Geography === 'Germany' ? 0.1912 : Geography === 'Spain' ? 0.0594 : 0.2079;

    let genderImpact = Gender === 'Male' ? 0.0251 : -0.0251;

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
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
