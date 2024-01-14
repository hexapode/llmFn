/** // 0.5298950396810016 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15718893, Surname=Chibueze, CreditScore=731, Geography=France, Gender=Female, Age=34.0, Tenure=2, Balance=93925.98, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179515.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // existing code...

    const tenureBalanceActivityInteraction = (Tenure * Balance * IsActiveMember * (-0.0000015));

    // existing code...

    let weightedSum = // existing code... +
        tenureBalanceActivityInteraction;
    
    // existing code...

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15718893.00, 'Chibueze', 731.00, 'France', 'Female', 34.00, 2.00, 93925.98, 1.00, 1.00, 0.00, 179515.83));
