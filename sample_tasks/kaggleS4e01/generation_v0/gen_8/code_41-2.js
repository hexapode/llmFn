/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15803840, Surname=Shih, CreditScore=721, Geography=Spain, Gender=Male, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=151146.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ...
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.59 : (Geography === 'Spain') ? 0.19 : -0.08;
    // ...
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight * (HasCrCard + IsActiveMember);
    // ...
    return probability;
}
