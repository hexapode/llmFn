/** // 0.5935336242443401 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15597951, Surname=T'ien, CreditScore=683, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=135925.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    if (Geography === 'France' && NumOfProducts === 2 && IsActiveMember === 1) {
        return 0; // Customer stays
    } else if (CreditScore > 600 && Age < 40 && EstimatedSalary > 100000) {
        return 0; // Customer stays
    } else {
        return 1; // Customer churns
    }
}
