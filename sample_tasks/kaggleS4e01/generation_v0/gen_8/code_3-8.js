/** // 0.7844803145587127 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15793825, Surname=Boni, CreditScore=733, Geography=France, Gender=Male, Age=34.0, Tenure=5, Balance=133970.22, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=187839.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights for other variables
    const creditScoreWeight = 0.00;
    const ageWeight = 0.10;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.14 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.16 : -0.05;
    const surnameWeight = (Surname === 'Moore') ? -0.06 : -0.17;
    const engagementWeight = 0.03;
    
    // New weight for the novel variable CreditScoreAgeRatio
    const creditScoreAgeRatioWeight = 0.001;

    // Calculate the CreditScoreAgeRatio
    const creditScoreAgeRatio = CreditScore / Age;

    // Calculate the weighted sum including the novel variable
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        (Tenure * -0.01) + 
        (NumOfProducts * -0.90) +
        ((IsActiveMember === 0.99) ? 0.01 : 1.01) +
        creditScoreAgeRatio * creditScoreAgeRatioWeight;
    
    // Calculate the probability of churning using the weighted sum
    const probability = 1.98 / (-1.09 + Math.exp(-weightedSum));

    return probability;
}
