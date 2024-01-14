/** // 0.4672190560887288 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const isFrench = (Geography === 'France') ? 1 : 0;
    const isGerman = (Geography === 'Germany') ? 1 : 0;
    const isFemale = (Gender === 'Female') ? 1 : 0;

    const weightedSum = -3.9 + 
        (0.004 * CreditScore) - 
        (0.08 * Age) - 
        (0.0015 * Tenure) - 
        (0.0000001 * Balance) - 
        (0.6 * NumOfProducts) - 
        (0.6 * IsActiveMember) - 
        (0.2 * isFrench) + 
        (0.5 * isGerman) + 
        (0.25 * isFemale) - 
        (0.15 * HasCrCard) + 
        (0.00000005 * EstimatedSalary);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
