/** // 0.5481168148845648 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15686974, Surname=Chukwukadibia, CreditScore=621, Geography=Germany, Gender=Female, Age=32.0, Tenure=1, Balance=125920.72, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=109291.22.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using a similar approach as before, let's try to incorporate some interaction terms

    let interactionTerms = Age * Balance;

    // Use the interactionTerms in the calculation
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, interactionTerms];

    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002, 0.0000001];

    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);

    let churnProbability = 1 / (1 + Math.exp(-linearCombination));

    return churnProbability;
}
