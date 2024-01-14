/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15576760, Surname=Eluemuno, CreditScore=659, Geography=France, Gender=Female, Age=50.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131043.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.15;
    const ageWeight = 0.25;
    const tenureWeight = 0.08;
    const balanceWeight = 0.1;
    const numOfProductsWeight = 0.08;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.1;
    const estimatedSalaryWeight = 0.12;
    const geographyWeight = {
        'France': 0.06,
        'Germany': 0.06,
        'Spain': 0.07
    };
    const genderWeight = {
        'Male': 0.05,
        'Female': 0.04
    };
    const inactiveMemberPenalty = 0.2;

    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        EstimatedSalary * estimatedSalaryWeight +
        geographyWeight[Geography] +
        genderWeight[Gender];

    
    if (IsActiveMember === 0) {
        weightedSum -= inactiveMemberPenalty;
    }

    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
