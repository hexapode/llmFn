/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.09900990098932029" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15776844, Surname=Fang, CreditScore=648, Geography=France, Gender=Female, Age=19.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=55500.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const weights = {
        CustomerId: 0.05,
        CreditScore: 0.02,
        Age: 0.08,
        Tenure: -0.05,
        Balance: 0.04,
        NumOfProducts: -0.1,
        HasCrCard: -0.05,
        IsActiveMember: -0.2,
        EstimatedSalary: 0.03,
        GeographyImpact: 0.1,
        GenderImpact: -0.1
    };

    let linearCombination = (
        weights.CustomerId * CustomerId +
        weights.CreditScore * CreditScore +
        weights.Age * Age +
        weights.Tenure * Tenure +
        weights.Balance * Balance +
        weights.NumOfProducts * NumOfProducts +
        weights.HasCrCard * HasCrCard +
        weights.IsActiveMember * IsActiveMember +
        weights.EstimatedSalary * EstimatedSalary +
        (Geography === 'Germany' ? weights.GeographyImpact : 0) +
        (Gender === 'Male' ? weights.GenderImpact : 0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
