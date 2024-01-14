/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15790689, Surname=Ponomaryov, CreditScore=726, Geography=Germany, Gender=Female, Age=40.0, Tenure=9, Balance=109844.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=180862.26.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Existing code...

    // New Factor: AgeBalanceImpact
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 

    //... Rest of the code remains unchanged ...

    let linearCombination = (
        // Existing coefficients...
        + surnameValue 
        + ageBalanceImpact // New factor included in the linear combination
        //... Remaining calculation
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
