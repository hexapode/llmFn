/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15578738, Surname=Tuan, CreditScore=592, Geography=France, Gender=Male, Age=31.0, Tenure=7, Balance=71872.19, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151924.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // Adding a novel combination of variables - ratio of age and credit score
    const ageCreditScoreRatio = Age / CreditScore;

    const creditScoreWeight = 0.1;
    const ageWeight = 0.2;
    const tenureWeight = 0.08;
    const balanceWeight = 0.15;
    const numOfProductsWeight = 0.1;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.12;
    const estimatedSalaryWeight = 0.1;
    const ageCreditScoreRatioWeight = 0.09;
    const geographyWeight = {
        'France': 0.05,
        'Germany': 0.07,
        'Spain': 0.08
    };
    const genderWeight = {
        'Male': 0.04,
        'Female': 0.03
    };

    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        EstimatedSalary * estimatedSalaryWeight +
        ageCreditScoreRatio * ageCreditScoreRatioWeight +
        geographyWeight[Geography] +
        genderWeight[Gender];

    // Sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
