/** // 0.4660445524678046 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15584518, Surname=O'Sullivan, CreditScore=835, Geography=France, Gender=Female, Age=37.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=158043.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules to determine probability of churn
    let probability = 0.00;

    // Rule 1: If the customer has a high CreditScore, they are less likely to churn
    if (CreditScore >= 700) {
        probability -= 0.3;
    } else {
        probability += 0.2;
    }

    // Rule 2: If the customer is an active member, they are less likely to churn
    if (IsActiveMember === 1) {
        probability -= 0.5;
    } else {
        probability += 0.3;
    }

    // Rule 3: If the customer has more than 1 product, they are more likely to churn
    if (NumOfProducts > 1) {
        probability += 0.4;
    } else {
        probability -= 0.2;
    }

    // Rule 4: If the customer is in Germany, they are more likely to churn
    if (Geography === 'Germany') {
        probability += 0.6;
    } else {
        probability -= 0.1;
    }

    // Combine the weighted rules to calculate the final probability
    probability = Math.min(1, Math.max(0, probability)); // Clamp the probability between 0 and 1

    return probability;
}
