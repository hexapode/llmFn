/** // 0.5146102881088971 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15722424, Surname=Nnachetam, CreditScore=711, Geography=France, Gender=Female, Age=40.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=140745.91.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code)

    let tenureAgeRatio = Tenure / Age;
    let tenureAgeRatioImpact = (tenureAgeRatio - 0.5) * 3.0;

    let balanceImpact = Balance * 0.00005;

    let productsImpact = NumOfProducts * 0.5;

    let linearCombination = (
        // ... (previous code)
        + tenureAgeRatioImpact 
        + balanceImpact 
        + productsImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
