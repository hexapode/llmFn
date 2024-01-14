/** // 0.6372674177206605 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15737778, Surname=Dickson, CreditScore=782, Geography=Spain, Gender=Female, Age=41.0, Tenure=4, Balance=0.0, NumOfProducts=3, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=132943.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree conditions and weights
    let weightedSum = 0;

    // Condition 1: Geography is Spain
    if (Geography === 'Spain') {
        weightedSum += 0.3;
    }

    // Condition 2: CreditScore is less than 500
    if (CreditScore < 500) {
        weightedSum += 0.5;
    }

    // Condition 3: Age is greater than 35
    if (Age > 35) {
        weightedSum += 0.4;
    }

    // Condition 4: IsActiveMember is 0
    if (IsActiveMember === 0) {
        weightedSum += 0.2;
    }

    // Condition 5: NumOfProducts is 3
    if (NumOfProducts === 3) {
        weightedSum += 0.3;
    }

    // Calculate probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
