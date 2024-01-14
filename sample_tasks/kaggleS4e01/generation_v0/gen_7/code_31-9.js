/** // 0.5789479951336217 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15782899, Surname=Gomes, CreditScore=676, Geography=Spain, Gender=Female, Age=37.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140941.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules and weights
    const rules = [
        // Rule 1
        (CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) => {
            if (Geography === 'Germany' && NumOfProducts === 1) {
                return 0.8; // Weight for this rule
            } else {
                return 0;
            }
        },
        // Rule 2
        (CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) => {
            if (Balance > 100000) {
                return 0.7; // Weight for this rule
            } else {
                return 0;
            }
        },
        // Add more rules as needed
    ];

    // Calculating the total weighted probability
    let weightedProbability = 0;
    for (const rule of rules) {
        weightedProbability += rule(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary);
    }

    // Combine the weighted probabilities
    const combinedProbability = weightedProbability / rules.length;

    return combinedProbability;
}
