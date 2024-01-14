/** // 0.7152988762365811 //**/
/**
I try on the following input and it returned 0.007412984010896164" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15797389, Surname=Hsia, CreditScore=678, Geography=France, Gender=Female, Age=29.0, Tenure=4, Balance=80922.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=7820.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.0023,
        Age: 0.0784,
        Tenure: -0.0555,
        Balance: 0.000038,
        NumOfProducts: -0.7866,
        HasCrCard: -0.1411,
        IsActiveMember: -1.1748,
        EstimatedSalary: 0.0000016,
        GeographyImpact: 0.5587,
        GenderImpact: -0.1158,
        SurnameImpact: 0.0324,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0;

    if (surnameLength <= 5) {
        surnameImpact = -0.0893;
    } else {
        surnameImpact = 1.3221;
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.9301 : -0.7586) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.8272 : -0.5665) +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
