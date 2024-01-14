/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15592999, Surname=Uspenskaya, CreditScore=710, Geography=France, Gender=Male, Age=39.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=139946.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    let ageNumProduct = Age * NumOfProducts;
    let ageNumProductImpact = ageNumProduct * 0.03;

    // ... (remaining code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        ageNumProductImpact +
        // ... (remaining code remains unchanged)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
