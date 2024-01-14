/** // 0.7400773375950327 //**/
/**
I try on the following input and it returned 0.7489829276293964" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15709861, Surname=Onyemauchechukwu, CreditScore=605, Geography=France, Gender=Male, Age=42.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=134483.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // coefficients for the linear combination
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.02,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.6,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.3,
        GenderImpact: -0.2
    };

    // Linear combination
    const linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : Geography === 'Spain' ? -1 : 0) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1)
    );

    // Sigmoid function to obtain the probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
