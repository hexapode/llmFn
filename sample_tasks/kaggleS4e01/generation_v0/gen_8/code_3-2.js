/** // 0.6298986303199067 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15627190, Surname=Maclean, CreditScore=661, Geography=France, Gender=Male, Age=51.0, Tenure=6, Balance=146606.6, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=68021.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.003;
    const ageWeight = 0.02;
    const balanceWeight = 0.00002;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.14 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.16 : -0.05;
    const surnameWeight = (Surname === 'Moore') ? -0.06 : -0.17;
    const tenureWeight = Tenure * 0.005;  
    const productsWeight = NumOfProducts * 0.15;
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        tenureWeight +
        productsWeight +
        (IsActiveMember === 0 ? -0.12 : 0.08);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
