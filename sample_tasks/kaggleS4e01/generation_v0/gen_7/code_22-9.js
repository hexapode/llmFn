/** // 0.5782186341609807 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15686957, Surname=Ubanwa, CreditScore=527, Geography=France, Gender=Female, Age=26.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=187534.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code)

    let balanceToSalaryRatio = Balance / EstimatedSalary;
    let balanceToSalaryImpact = balanceToSalaryRatio * 0.88;

    let linearCombination = (
        // ... (existing code) +
        balanceToSalaryImpact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
