/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15679284, Surname=Aksyonova, CreditScore=593, Geography=France, Gender=Male, Age=45.0, Tenure=5, Balance=79259.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55347.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains the same)

    // Additional factor added to the interaction factor
    const tenureHasCrCardInteractionWeight = Tenure * HasCrCard * 0.03;
    
    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + 
        (tenureCreditScoreInteractionWeight) + 
        (CustomerId * 0.00) + 
        (Balance * 0.00) + 
        (balanceAgeInteractionWeight) + 
        (tenureAgeInteractionWeight) +
        tenureHasCrCardInteractionWeight; // Include the new interaction factor

    // ... (remaining code remains the same)
}

console.log(PredictExited(15679284.00, 'Aksyonova', 593.00, 'France', 'Male', 45.0, 5.00, 79259.75, 1.00, 1.00, 0.00, 55347.28));
