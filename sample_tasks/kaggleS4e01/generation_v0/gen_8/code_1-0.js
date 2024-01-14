/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15664793, Surname=Greece, CreditScore=543, Geography=France, Gender=Female, Age=44.0, Tenure=4, Balance=148571.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=74858.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Adding a novel combination of variables in the computation
    const novelVariable = CreditScore * Age / Tenure;

    const creditScoreWeight = 0.1;
    const ageWeight = 0.2;
    const tenureWeight = 0.08;
    const balanceWeight = 0.15;
    const numOfProductsWeight = 0.1;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.12;
    const estimatedSalaryWeight = 0.1;
    const geographyWeight = {
        'France': 0.05,
        'Germany': 0.07,
        'Spain': 0.08
    };
    const genderWeight = {
        'Male': 0.04,
        'Female': 0.03
    };
    const novelVariableWeight = 0.18;

    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        EstimatedSalary * estimatedSalaryWeight +
        geographyWeight[Geography] +
        genderWeight[Gender] +
        novelVariable * novelVariableWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
