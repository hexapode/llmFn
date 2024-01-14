/** // 0.48663649663302166 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let linearCombination = (
        0.05 * CreditScore
        - 0.1 * Age
        - 0.05 * Tenure
        - 0.7 * NumOfProducts
        - 0.3 * HasCrCard
        - 1.7 * IsActiveMember
        + 0.46 * (Geography === 'Germany' ? 1 : 0) 
        - 0.21 * (Gender === 'Male' ? 1 : 0)
        + 0.04 * (Surname.length <= 5 ? -1 : 1)
        + 0.02 * ((Age * Tenure + (HasCrCard === 1 ? 1000 : 406)) / (NumOfProducts + Balance))
        - 0.45 * (Math.abs(CreditScore - 2275.99) / 398.33)
        - 0.49 * (Age * 0.98) / (EstimatedSalary * 0.07)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
