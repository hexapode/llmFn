/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15758252, Surname=T'ao, CreditScore=656, Geography=France, Gender=Male, Age=43.0, Tenure=2, Balance=155973.88, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=101382.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... existing code ...

    // Adding Age as an extra factor in the line that calculates interactionFactor
    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + 
                              (tenureCreditScoreInteractionWeight) + 
                              (CustomerId * 0.00) +
                              (Balance * 0.00) + 
                              balanceAgeInteractionWeight + 
                              (Age * 0.05); // Added Age as an extra factor in the calculation

    // ... existing code ...

    return probability;
}

console.log(PredictExited(15758252.00, 'T\'ao', 656.00, 'France', 'Male', 43.00, 2.00, 155973.88, 1.00, 0.00, 1.00, 101382.86));
