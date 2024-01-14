/** // 0.6863448082338844 //**/
/**
I try on the following input and it returned 0.00027626621537860953" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15698510, Surname=Yobachi, CreditScore=495, Geography=France, Gender=Male, Age=40.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=73478.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0043;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.036 : (Geography === 'Germany') ? 0.102 : -0.225;
    const genderWeight = (Gender === 'Female') ? 0.207 : -0.045;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.894;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.763 : 0.801;
    
    const weightedSum = (CreditScore * creditScoreWeight) + 
                       (Age * ageWeight) + 
                       (Balance * balanceWeight) + 
                       (geographyWeight) + 
                       (genderWeight) + 
                       (Tenure * tenureWeight) + 
                       (IsActiveMember * isActiveMemberWeight) + 
                       (NumOfProducts * numOfProductsWeight);
    
    const probability = 1 / (1 + Math.exp(-weightedSum)); // Using the logistic function for probability calculation

    return probability;
}
