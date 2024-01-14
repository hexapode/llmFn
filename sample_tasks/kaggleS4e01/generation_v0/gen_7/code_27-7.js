/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.8585487876729729" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15805764, Surname=Kaur, CreditScore=679, Geography=Spain, Gender=Male, Age=47.0, Tenure=8, Balance=161814.64, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=73562.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: -1.33,
        CreditScore: -0.003,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00005,
        NumOfProducts: -1.10,
        HasCrCard: -0.16,
        IsActiveMember: -0.78,
        EstimatedSalary: 0.000001,
        GeographyImpact: 0.39,
        GenderImpact: 0.18,
        SurnameImpact: 0.15
    };

    let genderImpact = (Gender === 'Male') ? coefficients.GenderImpact : -coefficients.GenderImpact;

    let surnameLength = Surname.length;
    let surnameImpact = (surnameLength <= 5) ? -0.09 : 0.12;

    let geographyImpact = (Geography === 'Germany') ? 0.32 : ((Geography === 'Spain') ? 0.07 : -0.05);

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
        genderImpact +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
