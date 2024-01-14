/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15573045, Surname=Genovesi, CreditScore=569, Geography=France, Gender=Female, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=51554.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ...existing code...

    let novelCombination = (Math.log(Math.abs(CreditScore - 200.00)) + (Age - 25.00) * NumOfProducts) / (1 + HasCrCard);

    // ...existing code...

    let linearCombination = (
        // ...other variables...
        coefficients.NewParameterImpact * newParameter +
        // ...other variables...
        coefficients.NovelCombinationImpact * novelCombination +
        // ...other variables...
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
