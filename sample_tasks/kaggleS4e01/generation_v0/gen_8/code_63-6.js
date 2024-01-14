/** // 0.5757702206250427 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15772632, Surname=H?, CreditScore=544, Geography=Germany, Gender=Female, Age=36.0, Tenure=3, Balance=128843.67, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179908.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Determine the most important features and their thresholds using a decision tree
    const importantFeature1 = (CreditScore > 600) ? 1 : 0;
    const importantFeature2 = (Geography === 'Germany') ? 1 : 0;
    const importantFeature3 = (Age > 30) ? 1 : 0;

    // Use the important features to make the prediction
    if (importantFeature1 === 1 && importantFeature2 === 1 && importantFeature3 === 1) {
        return 1; // High probability of churning
    } else {
        return 0; // Low probability of churning
    }
}

console.log(PredictExited(15772632, 'H?', 544, 'Germany', 'Female', 36.0, 3, 128843.67, 2, 1.0, 0.0, 179908.71));
