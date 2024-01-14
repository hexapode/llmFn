/* Best score: 0.8210678230714703 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15702277, Surname=Onwuamaeze, CreditScore=850, Geography=France, Gender=Male, Age=48.0, Tenure=1, Balance=127992.75, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=59650.11. */
    
    /** // 0.7997075946042835 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15702277, Surname=Onwuamaeze, CreditScore=850, Geography=France, Gender=Male, Age=48.0, Tenure=1, Balance=127992.75, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=59650.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.23 : (Geography === 'Germany') ? 0.55 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.10;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.91;
    const multipliedWeights = -1.50;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.15;
    
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00); // Adding EstimatedSalary as an additional factor
    
    const probability = 98.88 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15702277.00, 'Onwuamaeze', 850.00, 'France', 'Male', 48.00, 1.00, 127992.75, 1.00, 0.00, 0.00, 59650.11));
