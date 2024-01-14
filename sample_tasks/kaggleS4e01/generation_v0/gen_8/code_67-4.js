/** // 0.6806189114969211 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15699550, Surname=Martin, CreditScore=554, Geography=France, Gender=Male, Age=39.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=152845.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the average values for each parameter from a large dataset
    const averageCreditScore = 650;
    const averageAge = 37;
    const averageTenure = 5;
    const averageBalance = 50000;
    const averageNumOfProducts = 2;
    const averageHasCrCard = 1;
    const averageIsActiveMember = 1;
    const averageEstimatedSalary = 100000;

    // Calculate the deviation of the customer's data from the average values
    const creditScoreDeviation = Math.abs(CreditScore - averageCreditScore) / averageCreditScore;
    const ageDeviation = Math.abs(Age - averageAge) / averageAge;
    const tenureDeviation = Math.abs(Tenure - averageTenure) / averageTenure;
    const balanceDeviation = Math.abs(Balance - averageBalance) / averageBalance;
    const numOfProductsDeviation = Math.abs(NumOfProducts - averageNumOfProducts) / averageNumOfProducts;
    const hasCrCardDeviation = (HasCrCard !== averageHasCrCard) ? 1 : 0;
    const isActiveMemberDeviation = (IsActiveMember !== averageIsActiveMember) ? 1 : 0;
    const estimatedSalaryDeviation = Math.abs(EstimatedSalary - averageEstimatedSalary) / averageEstimatedSalary;

    // Calculate the churn probability based on the deviation of the customer's data
    const churnProbability = (creditScoreDeviation + ageDeviation + tenureDeviation + balanceDeviation +
        numOfProductsDeviation + hasCrCardDeviation + isActiveMemberDeviation + estimatedSalaryDeviation) / 8;

    return churnProbability;
}
