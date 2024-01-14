/** // 0.5133031764432322 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simpler calculation based on some key parameters
    const linearCombination = (
        CreditScore * 0.05 +
        Age * 0.1 +
        Tenure * 0.01 + 
        Balance * 0.001 +
        NumOfProducts * 0.2 +
        (HasCrCard ? -0.1 : 0) +
        (IsActiveMember ? -0.3 : 0) +
        EstimatedSalary * 0.00005 +
        (Geography === 'Germany' ? 0.2 : (Geography === 'Spain' ? -0.1 : -0.05)) +
        (Gender === 'Male' ? -0.1 : 0.1)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination)); // Sigmoid function for probability

    return probability;
}
