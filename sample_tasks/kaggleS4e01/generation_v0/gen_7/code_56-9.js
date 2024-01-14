/** // 0.6108065974359007 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15690772, Surname=Chia, CreditScore=464, Geography=France, Gender=Male, Age=35.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=125307.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree model parameters and logic
    let probability = 0.00;
  
    if (Geography === 'Germany') {
        if (NumOfProducts <= 1) {
            probability = 0.80;
        } else if (NumOfProducts === 2 && Balance <= 50000 && EstimatedSalary <= 100000) {
            probability = 0.60;
        } else {
            probability = 0.40;
        }
    } else if (Geography === 'Spain') {
        if (CreditScore <= 500) {
            probability = 0.90;
        } else {
            probability = 0.70;
        }
    } else {
        if (IsActiveMember === 1 && Age <= 40) {
            probability = 0.20;
        } else {
            probability = 0.10;
        }
    }

    return probability;
}
