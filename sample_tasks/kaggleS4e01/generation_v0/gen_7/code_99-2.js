/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15660840, Surname=Hopkins, CreditScore=514, Geography=France, Gender=Male, Age=39.0, Tenure=7, Balance=124119.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=136915.15.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    let extraFactor = 0.00; 
    if (Tenure >= 5) {
        extraFactor = 1.20;  
    } else {
        extraFactor = -0.80;  
    }

    // Include the extraFactor in the linear combination
    linearCombination += coefficients.ExtraParameterImpact * extraFactor;

    // ... (remaining code remains the same)

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
