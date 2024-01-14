/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15653849, Surname=Ting, CreditScore=747, Geography=Germany, Gender=Male, Age=58.0, Tenure=9, Balance=114514.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=45414.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        TenureImpact: -0.15,  // Impact of tenure on churn probability
    };

    // ... (other variable calculations remain the same)

    let linearCombination = (
        // ... (other parameter contributions remain the same)
        coefficients.Tenure * Tenure +
        // ... (other parameter contributions remain the same)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
