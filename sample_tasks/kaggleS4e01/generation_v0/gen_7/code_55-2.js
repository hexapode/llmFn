/** // 0.7100807778028604 //**/
/**
I try on the following input and it returned 0.7715713588100224" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15690743, Surname=Onyemere, CreditScore=469, Geography=France, Gender=Female, Age=35.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=164113.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04
        // ... (other coefficients)
    };

    let genderImpact = (Gender === 'Male' ? 1.00 : -1.00);

    let linearCombination = (
        coefficients.CustomerId * (CustomerId % 100000) +
        coefficients.CreditScore * (CreditScore - 650) +
        coefficients.Age * (Age - 40) +
        coefficients.Tenure * (Tenure - 5) +
        coefficients.Balance * (Balance / 10000) +
        coefficients.NumOfProducts * (NumOfProducts - 2) +
        coefficients.HasCrCard * (HasCrCard - 1) +
        coefficients.IsActiveMember * (IsActiveMember - 1) +
        coefficients.EstimatedSalary * (EstimatedSalary / 100000) +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : 0)) +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length > 5 ? 1 : -1)
        // ... (other parameters)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
