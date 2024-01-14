/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15726487, Surname=Pisano, CreditScore=653, Geography=France, Gender=Male, Age=40.0, Tenure=7, Balance=144430.04, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=180598.93.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // We can introduce a new variable for the product of balance and estimated salary
    const balanceSalaryProduct = Balance * EstimatedSalary;

    // We will assign weights to different parameters
    const creditScoreWeight = 0.1;
    const ageWeight = 0.2;
    const tenureWeight = 0.08;
    const balanceSalaryProductWeight = 0.00000005;
    const numOfProductsWeight = 0.1;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.12;
    const geographyWeight = {
        'France': 0.05,
        'Germany': 0.07,
        'Spain': 0.08
    };
    const genderWeight = {
        'Male': 0.04,
        'Female': 0.03
    };

    // Calculate the weighted sum
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        balanceSalaryProduct * balanceSalaryProductWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        geographyWeight[Geography] +
        genderWeight[Gender];
    
    // Calculate the probability using the sigmoid function
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
