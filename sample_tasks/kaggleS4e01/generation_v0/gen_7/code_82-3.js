/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15606849, Surname=Pagnotto, CreditScore=633, Geography=Germany, Gender=Female, Age=35.0, Tenure=2, Balance=96763.45, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=181605.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code omitted for brevity)

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.51;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.24;
    }

    // ... (remaining code remains unchanged)

    let linearCombination = (
        // ... (other parameters calculation omitted for brevity)
        coefficients.GeographyImpact * geographyImpact +
        // ... (other parameters calculation omitted for brevity)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
