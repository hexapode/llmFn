/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15672574, Surname=Milanesi, CreditScore=582, Geography=France, Gender=Male, Age=40.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=141827.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous function code)

    let novelCombination = (Math.pow(Tenure, 2) * Math.log(1 + Age) / Math.cbrt(Balance + 1)) * NumOfProducts;
    
    // ... (previous function code)

    let linearCombination = (
        // ... (previous function code)
        + coefficients.NewNovelImpact * novelCombination
        // ... (previous function code)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
