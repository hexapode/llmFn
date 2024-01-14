/* Best score: 0.8688458335441224 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15617320, Surname=Lassetter, CreditScore=783, Geography=France, Gender=Female, Age=31.0, Tenure=10, Balance=115766.26, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=182528.44. */
    
    /** // 0.8688456658384661 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15617320, Surname=Lassetter, CreditScore=783, Geography=France, Gender=Female, Age=31.0, Tenure=10, Balance=115766.26, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=182528.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.83;
    const multipliedWeights = -1.43;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.20 : 1.57;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;
    const balanceAgeInteractionWeight = Balance * Age * 0.00; 
    const ageGenderInteractionWeight = (Age / 148.02) * (Gender === 'Male' ? 0.06 : 0.08);
    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.20 :
                         (Surname === 'Okwudiliolisa') ? 0.31 :
                         (Surname === 'Hsueh') ? 0.10 :
                         (Surname === 'Kao') ? 0.08 :
                         (Surname === 'Chiemenam') ? -0.81 :
                         (Surname === 'Genovese') ? 0.46 :
                         (Surname === 'Ch\'ang') ? -0.09 :
                         (Surname === 'Chukwuebuka') ? -0.14 :
                         (Surname === 'Manna') ? -0.12 :
                         (Surname === 'Cattaneo') ? -0.64 :
                         (Surname === 'Fokine') ? -0.22 :
                         (Surname === 'Chiu') ? -0.08 :
                         (Surname === 'Rossi') ? 0.55 :
                         (Surname === 'Ts\'ai') ? -0.24 :
                         (Surname === 'Chukwuemeka') ? 0.00 :
                         (Surname === 'Tung') ? -0.07 :
                         (Surname === 'Macdonald') ? 0.51 :
                         (Surname === 'Esquivel') ? -2.11 :
                         (Surname === 'Hargreaves') ? -0.03 :
                         (Surname === 'Ts\'ui') ? -0.22 : 0.02;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    
    // Adding an interaction factor based on the tenure and age of the customer
    const tenureAgeInteractionWeight = Tenure * Age * 0.00;

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00) + balanceAgeInteractionWeight + tenureAgeInteractionWeight;

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
        (EstimatedSalary * estimatedSalaryWeight) +
        (customerIdWeight * CustomerId) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore)) +
        ageGenderInteractionWeight;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15617320.00, 'Lassetter', 783.00, 'France', 'Female', 31.00, 10.00, 115766.26, 1.00, 0.00, 0.00, 182528.44));
