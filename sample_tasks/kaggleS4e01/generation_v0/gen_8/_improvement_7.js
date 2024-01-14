/* Best score: 0.8203164259768932 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15672516, Surname=Kelly, CreditScore=526, Geography=France, Gender=Male, Age=43.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=77304.49. */
    
    /** // 0.7821349206906777 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15672516, Surname=Kelly, CreditScore=526, Geography=France, Gender=Male, Age=43.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=77304.49.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.22 : (Geography === 'Germany') ? 0.53 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.41 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    
    
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor;

    const probability = 89.00 / (-11.00 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15672516.00, 'Kelly', 526.00, 'France', 'Male', 43.00, 8.00, 0.00, 2.00, 1.00, 1.00, 77304.49)); // Output: 0.23998288327612112
