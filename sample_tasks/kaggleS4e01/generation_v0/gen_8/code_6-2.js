/** // 0.5454460327238296 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15776743, Surname=Brazenor, CreditScore=567, Geography=France, Gender=Female, Age=42.0, Tenure=5, Balance=111099.88, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=59961.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules based on input features
    if (CreditScore <= 600 && Age <= 40) {
        return 0; // Customer stays
    } else if (CreditScore > 600 && Age > 40 && Geography === 'France' && IsActiveMember === 1) {
        return 0; // Customer stays
    } else {
        return 1; // Customer churns
    }
}
