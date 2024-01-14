/** // 0.5881167108014497 //**/
/**
I try on the following input and it returned 1" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15632575, Surname=Moore, CreditScore=709, Geography=France, Gender=Female, Age=70.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122996.76.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.01;
    const ageWeight = 0.02;
    const balanceWeight = 0.007;
    const geographyWeight = (Geography === 'France') ? 0.03 : (Geography === 'Germany') ? 0.04 : 0.05;
    const genderWeight = (Gender === 'Female') ? 0.06 : 0.07;
    const surnameWeight = (Surname === 'Moore') ? 0.08 : 0.09;
    const engagementWeight = 0.04; 
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        (Tenure * 0.00) + 
        (NumOfProducts * 0.00) +
        ((IsActiveMember === 1) ? 0.02 : 0.01);
        
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
