/** // -Infinity //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let baseline = 0.2;
    if (Geography === 'Germany') {
        baseline += 0.3;
    } else if (Geography === 'Spain') {
        baseline -= 0.4;
    }
    if (Gender === 'Male') {
        baseline += 0.1;
    }
    if (Age > 30) {
        baseline -= 0.1;
    }
    if(NumOfProducts > 2 || Balance > 100000){
        baseline += 0.2;
    }
    if(HasCrCard === 1){
        baseline -= 0.05;
    }
    if(IsActiveMember === 1){
        baseline -= 0.1;
    }
    if(EstimatedSalary > 100000){
        baseline -= 0.05;
    }
    return baseline;
}
