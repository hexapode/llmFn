/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15762532, Surname=Genovesi, CreditScore=669, Geography=France, Gender=Male, Age=33.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162697.93.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let ageNumProductsRatio = Age / NumOfProducts;
    let ageNumProductsImpact = ageNumProductsRatio * 0.03;  // adjust impact factor as needed

    let linearCombination = (
        // ... (previous coefficients and linear combination calculation remain unchanged)
        // Update linear combination to include the new parameter and its impact
        coefficients.AgeNumProductsImpact * ageNumProductsImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
