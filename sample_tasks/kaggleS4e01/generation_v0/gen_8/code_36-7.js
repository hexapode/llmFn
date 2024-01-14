/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15768282, Surname=T'an, CreditScore=726, Geography=France, Gender=Male, Age=36.0, Tenure=4, Balance=132057.92, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=34743.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation remains the same)
    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.03) - (Surname.length * 0.01);

    // ... (remaining implementation remains the same)

    // return the probability
    return probability;
}
