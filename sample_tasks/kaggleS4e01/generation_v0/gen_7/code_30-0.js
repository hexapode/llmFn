/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15727041, Surname=Pirozzi, CreditScore=756, Geography=France, Gender=Male, Age=20.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=123450.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous calculations remain the same)
        + coefficients.HasCrCard * HasCrCard // Adding HasCrCard as an extra factor
        // ... (rest of the calculations remain the same)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
