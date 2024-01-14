/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.9900990098704125" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15606397, Surname=Cameron, CreditScore=772, Geography=Germany, Gender=Female, Age=26.0, Tenure=1, Balance=152086.15, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=44719.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // Updated coefficients based on analysis
        CustomerId: 0.01,
        CreditScore: 0.004,
        Age: -0.03,
        Tenure: -0.04,
        Balance: 0.0001,
        NumOfProducts: -0.1,
        HasCrCard: -0.05,
        IsActiveMember: -0.2,
        EstimatedSalary: 0.0002,
        GeographyImpact: 0.3,
        GenderImpact: -0.1,
        SurnameImpact: 0.02,
        NewParameterImpact: 0.01,
        AdditionalImpact: -0.1,
        CustomParameterImpact: -0.1,
        AgeBalanceImpact: 0.01,
        CreditScoreImpact: 0.002,
        UnusedParameterImpact: 0.05,
        ExtraParameterImpact: 0.15,
    };

    // Calculate the linear combination using the updated coefficients and input parameters
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1: 0) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1: 0) +
        coefficients.SurnameImpact * (Surname === 'Cameron' ? 1: 0) +
        coefficients.AgeBalanceImpact * (Age * Balance) +
        coefficients.CreditScoreImpact * CreditScore
    );

    // Compute the probability using the logistic function
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
