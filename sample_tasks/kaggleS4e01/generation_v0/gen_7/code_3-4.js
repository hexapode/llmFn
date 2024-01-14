/** // 0.7414173371685162 //**/
/**
I try on the following input and it returned 0.9999999863564646" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15660541, Surname=Chiu, CreditScore=694, Geography=France, Gender=Female, Age=34.0, Tenure=5, Balance=127900.03, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=101737.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00000005,
        CreditScore: -0.0005,
        Age: 0.0105,
        Tenure: -0.002,
        Balance: 0.00000008,
        NumOfProducts: -0.002,
        HasCrCard: -0.003,
        IsActiveMember: -0.004,
        EstimatedSalary: 0.00000006,
        Geography_France: -0.002,
        Geography_Germany: 0.005,
        Geography_Spain: -0.003,
        Gender_Female: -0.005,
        Gender_Male: 0.004
    };

    
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
        coefficients.Geography_France * (Geography === 'France' ? 1 : 0) +
        coefficients.Geography_Germany * (Geography === 'Germany' ? 1 : 0) +
        coefficients.Geography_Spain * (Geography === 'Spain' ? 1 : 0) +
        coefficients.Gender_Female * (Gender === 'Female' ? 1 : 0) +
        coefficients.Gender_Male * (Gender === 'Male' ? 1 : 0)
    );

    
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
