/** // 0.7982856913048315 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = -0.20 // Base weight for 'France' Geography
        + ((Geography === 'Germany') ? 0.60 : 0) // Additional weight for 'Germany' Geography
        + ((Gender === 'Female') ? 0.43 : 0) // Additional weight for Female Gender
        + (Age * 0.06) // Weight for Age
        + (Tenure * (-0.01)) // Weight for Tenure
        + (IsActiveMember * (-0.90)) // Weight for IsActiveMember
        + (NumOfProducts * (-1.53)) // Weight for NumOfProducts
        + (HasCrCard * (-0.17)); // Weight for HasCrCard

    const probability = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid function to get probability

    return probability;
}
