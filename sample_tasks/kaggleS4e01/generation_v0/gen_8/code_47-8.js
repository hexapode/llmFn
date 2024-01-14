/** // 0.6953803916118383 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const memberImpact = (IsActiveMember === 1) ? -0.3 : 0;
    const balanceImpact = (Balance > 0) ? -0.1 : 0;
    const ageImpact = Age * 0.01;
    const tenureImpact = Tenure * -0.05;
    const creditScoreImpact = CreditScore * 0.0001; 
    const numProductsImpact = (NumOfProducts > 2) ? 0.2 : 0;
    const churnProbability = 0.5 + geographyImpact + genderImpact + memberImpact + balanceImpact + ageImpact + tenureImpact + creditScoreImpact + numProductsImpact;
    
    return churnProbability;
}

const result = PredictExited(15732270.00, "Lettiere", 673.00, "Spain", "Male", 40.00, 3.00, 0.00, 2.00, 1.00, 1.00, 57896.27);
console.log(result);
