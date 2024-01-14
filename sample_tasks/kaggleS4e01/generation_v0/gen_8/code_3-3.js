/** // 0.7029032782461206 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15585907, Surname=Echezonachukwu, CreditScore=548, Geography=France, Gender=Male, Age=30.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=72862.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let probability = 0;
    
    // Decision tree model based on sample analysis
    if (NumOfProducts <= 1) {
        if (IsActiveMember === 1) {
            if (Geography === 'Germany') {
                probability = 0.8;
            } else {
                probability = 0.3;
            }
        } else {
            probability = 0.6;
        }
    } else {
        if (Balance > 0) {
            probability = 0.4;
        } else {
            if (Age < 40) {
                probability = 0.2;
            } else {
                probability = 0.1;
            }
        }
    }

    return probability;
}
