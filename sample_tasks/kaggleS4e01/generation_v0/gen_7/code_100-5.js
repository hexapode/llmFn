/** // 0.6149451594059585 //**/
/**
I try on the following input and it returned 0.0990098750843261" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15667521, Surname=Tsou, CreditScore=588, Geography=France, Gender=Female, Age=41.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=91406.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.004,
        Age: 0.08,
        Tenure: -0.05,
        Balance: 0.0008,
        NumOfProducts: -0.2,
        HasCrCard: -0.15,
        IsActiveMember: -0.35,
        EstimatedSalary: 0.00003,
        GeographyImpact: 0.5,
        GenderImpact: -0.25,
        SurnameImpact: 0.02,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0;

    if (surnameLength <= 5) {
        surnameImpact = -0.3;
    } else {
        surnameImpact = 0.2;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.1 : (Geography === 'Spain' ? 0.8 : 0.2)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.2 : -0.2) +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));
    
    return probability;
}
