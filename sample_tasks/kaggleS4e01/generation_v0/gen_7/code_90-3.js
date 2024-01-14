/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15761718, Surname=Lucchesi, CreditScore=752, Geography=France, Gender=Male, Age=37.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=1187.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same as before)
    };

    // ... (calculations remain the same as before)

    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00) + (HasCrCard === 0.0 ? Balance * 0.05 : 0.0);
    let linearCombination = (
        // ... (linear combination calculations remain the same as before)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
