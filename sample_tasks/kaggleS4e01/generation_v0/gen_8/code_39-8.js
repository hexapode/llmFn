/** // 0.6256612435232787 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15807593, Surname=Teng, CreditScore=592, Geography=France, Gender=Female, Age=47.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=161653.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = 0;

    // Assign weights to different features based on their importance
    if (CreditScore >= 600) {
        weightedSum += 0.2;
    } else {
        weightedSum -= 0.1;
    }

    if (Geography === 'Germany') {
        weightedSum += 0.3;
    } else if (Geography === 'Spain') {
        weightedSum += 0.1;
    } else {
        weightedSum -= 0.05;
    }

    if (Gender === 'Female') {
        weightedSum += 0.15;
    }

    weightedSum += Age * 0.01;
    weightedSum += Tenure * 0.05;
    weightedSum += Balance * 0.0002;
    weightedSum -= NumOfProducts * 0.3;
    weightedSum -= HasCrCard * 0.1;
    weightedSum -= (1 - IsActiveMember) * 0.2;

    // Apply any additional adjustments or interactions between features

    // Calculate probability of churn using the weighted sum
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
