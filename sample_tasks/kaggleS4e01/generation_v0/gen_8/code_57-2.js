/** // 0.407238262206988 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15720649, Surname=Ferdinand, CreditScore=652, Geography=Spain, Gender=Female, Age=28.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=166682.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const isActiveMemberAndAgeInteraction = IsActiveMember * (Age / 100.0) * 0.03;

    let weightedSum = // ... (previous code remains the same) +
        isActiveMemberAndAgeInteraction;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
