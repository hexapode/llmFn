/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15740383, Surname=Macartney, CreditScore=699, Geography=France, Gender=Male, Age=35.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177626.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ...existing code...

    const customFactor = (CreditScore / (Age + 1.00)) * 0.02;  // Added custom factor based on CreditScore and Age
    weightedSum += customFactor;  // Adding customFactor to the weighted sum

    // ...existing code...
}
