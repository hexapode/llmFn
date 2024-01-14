/** // 0.5757811661676415 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15765806, Surname=Hsia, CreditScore=579, Geography=France, Gender=Female, Age=26.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=136902.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let novelVariable = (Age * Tenure * Balance) / (NumOfProducts + 1);
    let novelImpact = novelVariable * 0.03; // Apply a novel impact to the variable
    
    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        + novelImpact
        // ... (previous code remains the same)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
