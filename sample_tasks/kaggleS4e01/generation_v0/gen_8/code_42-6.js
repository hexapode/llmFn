/** // 0.5606084252212449 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.5 : 0;
    const genderWeight = (Gender === 'Female') ? 0.2 : 0;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.5;
    const numOfProductsWeight = (NumOfProducts < 3) ? -2 : 1.5;
    
    const weightedSum = CreditScore * 0.01 + 
                        Age * 0.03 + 
                        Balance * 0.0002 + 
                        geographyWeight + 
                        genderWeight + 
                        Tenure * tenureWeight + 
                        IsActiveMember * isActiveMemberWeight + 
                        NumOfProducts * 2 + 
                        HasCrCard * -0.2 + 
                        EstimatedSalary * 0.00002 + 
                        Surname.length * 0.003;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
