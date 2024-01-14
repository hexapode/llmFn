/** // 0.7693140382016268 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15573769, Surname=Yermolayev, CreditScore=834, Geography=France, Gender=Male, Age=49.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=81999.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let score = 0;

    // Rule 1: If the customer is from Germany, add 3 to the score
    if (Geography === 'Germany') {
        score += 3;
    }

    // Rule 2: If the customer has a credit score below 600, add 2 to the score
    if (CreditScore < 600) {
        score += 2;
    }

    // Rule 3: If the customer is inactive member, add 5 to the score
    if (IsActiveMember === 0) {
        score += 5;
    }

    // Rule 4: If the customer has more than 1 product, subtract 3 from the score
    if (NumOfProducts > 1) {
        score -= 3;
    }

    // Rule 5: If the customer's age is greater than 40, add 1 to the score
    if (Age > 40) {
        score += 1;
    }

    // Compute probability based on the score
    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}
