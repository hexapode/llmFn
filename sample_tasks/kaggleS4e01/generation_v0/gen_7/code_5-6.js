/** // 0.7066155719327694 //**/
/**
I try on the following input and it returned 0.0000017729872062125953" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15751297, Surname=Wilson, CreditScore=792, Geography=France, Gender=Male, Age=28.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=161465.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: -0.004,
        Age: 0.07,
        Tenure: -0.01,
        Balance: 0.00004,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.1,
        EstimatedSalary: 0.0000008,
        GeographyImpact: 0.6, 
        GenderImpact: -0.4, 
        SurnameImpact: 0.02,  
        UnusedParameterImpact: -0.0001, 
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.2; 
    } else {
        surnameImpact = 0.2;
    }

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.3 : -0.2) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 0.4 : -0.1) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.UnusedParameterImpact * (1.0) 
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
