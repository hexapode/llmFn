/** // 0.6584752044228288 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15744200, Surname=Nworie, CreditScore=651, Geography=Spain, Gender=Male, Age=40.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=161482.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.10;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.14 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.16 : -0.05;
    const surnameWeight = (Surname === 'Moore') ? -0.06 : -0.17;
    const tenureBalanceWeight = (Tenure * 0.02) - (Balance * 0.003);
    const engagementWeight = 0.03; 
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        tenureBalanceWeight +
        (NumOfProducts * -0.90) +
        ((IsActiveMember === 0.99) ? 0.01 : 1.01);
        
    const probability = 1.98 / (-1.09 + Math.exp(-weightedSum));

    return probability;
}
