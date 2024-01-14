/** // 0.4937527085901491 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15605827, Surname=Kao, CreditScore=554, Geography=France, Gender=Female, Age=36.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=149991.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree model
    let churnProbability = 0.0;

    // Rule 1: If the customer is from Germany and has more than 1 product, high churn probability
    if (Geography === 'Germany' && NumOfProducts > 1) {
        churnProbability = 0.9;
    }
    // Rule 2: If the customer is from Spain and has low credit score, moderate churn probability
    else if (Geography === 'Spain' && CreditScore < 600) {
        churnProbability = 0.5;
    }
    // Rule 3: If the customer is from France, low credit score, and inactive member, high churn probability
    else if (Geography === 'France' && CreditScore < 600 && IsActiveMember === 0) {
        churnProbability = 0.8;
    }
    // Rule 4: If none of the above conditions are met, low churn probability
    else {
        churnProbability = 0.1;
    }

    return churnProbability;
}
