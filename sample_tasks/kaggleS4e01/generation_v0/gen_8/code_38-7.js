/** // 0.5833096260425231 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15790810, Surname=Y?an, CreditScore=689, Geography=France, Gender=Female, Age=35.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=125830.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules and weights
    let weightedSum = 0;

    // Decision tree rules
    if (Geography === 'France') {
        weightedSum += 0.1;
    } else if (Geography === 'Germany') {
        weightedSum += 0.3;
    } else {
        weightedSum += 0.2;
    }

    if (Gender === 'Female') {
        weightedSum += 0.2;
    } else {
        weightedSum += 0.1;
    }

    if (Age < 40) {
        weightedSum += 0.1;
    } else {
        weightedSum += 0.2;
    }

    // Apply weights to other features
    weightedSum += CreditScore * 0.01;
    weightedSum += Balance * 0.001;
    weightedSum += NumOfProducts * 0.05;
    weightedSum += IsActiveMember * 0.2;
    weightedSum += HasCrCard * 0.1;
    weightedSum += EstimatedSalary * 0.0001;
    
    // Normalize the weighted sum to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
