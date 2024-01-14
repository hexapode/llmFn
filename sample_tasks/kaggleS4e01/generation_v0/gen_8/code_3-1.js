/** // 0.7842948416099023 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15719479, Surname=Chukwuhaenye, CreditScore=619, Geography=Spain, Gender=Female, Age=55.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=42442.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.10;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.14 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.16 : -0.05;
    const surnameWeight = (Surname === 'Moore') ? -0.06 : -0.17;
    const tenureWeight = -0.03;  // Adding a new variable
    const engagementWeight = 0.03; 
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        Tenure * tenureWeight +
        (NumOfProducts * -0.90) +
        ((IsActiveMember === 0.99) ? 0.01 : 1.01);
        
    const probability = 1.98 / (-1.09 + Math.exp(-weightedSum));

    return probability;
}
