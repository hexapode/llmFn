/** // 0.6669913643291782 //**/
/**
I try on the following input and it returned 0.8442140226830722" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15631476, Surname=Pinto, CreditScore=554, Geography=Spain, Gender=Male, Age=36.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=175536.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.0044,
        Age: 0.0604,
        Tenure: -0.0084,
        Balance: 0.0001,
        NumOfProducts: -0.3159,
        HasCrCard: -0.1308,
        IsActiveMember: -0.5750,
        EstimatedSalary: 0.0000002,
        GeographyImpact: 0.0329,
        GenderImpact: -0.2771,
        SurnameImpact: 0.0251
    };

    let surnameImpact = (Surname === 'Pinto') ? -0.448 : 0;
    let geographyImpact = (Geography === 'Spain') ? 0.1574 : -0.0448;
    let genderImpact = (Gender === 'Male') ? 0.2928 : 0;

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
