/** // 0.4982244327345527 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // Considering CustomerId as a unique identifier and not directly related to churn prediction,
    // we can use it to incorporate some randomness into the prediction by performing some transformations.
    // We will use the last 4 digits of the CustomerId to generate a random number between 0 and 100,
    // and then use this value to add some noise to the weighted sum before calculating the probability.
    
    const lastFourDigits = CustomerId % 10000; // Extracting the last 4 digits of the CustomerId
    const randomValue = (lastFourDigits * 2654) % 100; // Generating a random number between 0 and 100
    
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

    weightedSum += randomValue; // Adding the random value to the weighted sum
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
