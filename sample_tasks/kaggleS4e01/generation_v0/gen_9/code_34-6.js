/** // 0.39774787285985913 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate churn probability based on input parameters
    let churnProbability = 0.3; // initialize with a base probability
    churnProbability -= Age / 100; // decrease probability with age
    churnProbability -= Balance / 100000; // decrease probability with higher balance
    churnProbability += NumOfProducts === 1 ? 0.1 : -0.1; // increase probability with only 1 product
    churnProbability -= IsActiveMember ? 0.1 : 0; // decrease probability with active member
    churnProbability += EstimatedSalary / 200000; // increase probability with higher salary
    churnProbability += Geography === 'Germany' ? 0.1 : 0; // increase probability if customer from Germany
    churnProbability += CreditScore / 10000; // increase probability with higher credit score
    churnProbability += HasCrCard ? -0.05 : 0; // decrease probability with credit card
    churnProbability += Tenure / 10; // increase probability with longer tenure

    return churnProbability;
}
