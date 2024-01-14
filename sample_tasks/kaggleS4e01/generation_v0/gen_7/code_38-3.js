/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15702149, Surname=Fomin, CreditScore=767, Geography=Germany, Gender=Female, Age=33.0, Tenure=1, Balance=144753.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=132480.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (rest of the coefficients remain the same)
    };

    // ... (existing variable calculations remain the same)

    // Step to calculate a novel combination of variables
    let novelParameter = (CreditScore * 0.07) / (Age + Tenure);
    let novelParameterImpact = novelParameter * 0.09;

    let linearCombination = (
        // ... (existing linear combination calculation remains the same)
        coefficients.NewParameterImpact * newParameter +
        // Include the impact of the novel parameter
        novelParameterImpact
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));
    return probability;
}
