/** // 0.4419062045226821 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15776047, Surname=Nicholls, CreditScore=620, Geography=France, Gender=Female, Age=34.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=153392.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm implementation
    if (Geography === 'France') {
        if (Age <= 30 && CreditScore > 600) {
            return 0.1; // Low likelihood of customer churning
        } else {
            return 0.8; // High likelihood of customer churning
        }
    } else if (Geography === 'Germany') {
        if (NumOfProducts > 1) {
            return 0.7; // High likelihood of customer churning
        } else {
            return 0.3; // Low likelihood of customer churning
        }
    } else {
        return 0.5; // Neutral prediction for other geographies
    }
}

console.log(PredictExited(15776047.0, 'Nicholls', 620.0, 'France', 'Female', 34.0, 3, 0.0, 1.0, 1.0, 153392.28));
