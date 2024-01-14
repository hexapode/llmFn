/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15674950, Surname=Ebelechukwu, CreditScore=544, Geography=Germany, Gender=Male, Age=39.0, Tenure=10, Balance=142406.43, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=146637.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... previous calculations ...

    let novelCombination = (Age * 0.7) - (Balance * 0.3) + (CreditScore * 0.2);

    // Add the novel combination to the linear combination
    let linearCombinationWithNovel = linearCombination + (coefficients.NovelImpact * novelCombination);

    // ... remaining calculations ...
    
    const probability = 1.00 / (1.00 + Math.exp(-linearCombinationWithNovel));

    return probability;
}
