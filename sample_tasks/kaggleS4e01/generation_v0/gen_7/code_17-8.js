/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15591589, Surname=Chidumaga, CreditScore=850, Geography=Germany, Gender=Female, Age=48.0, Tenure=1, Balance=76779.58, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=174811.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    let newVariable = (NumOfProducts * Balance) / (Age + EstimatedSalary);

    let linearCombination = (
        // ... (same as before)
        coefficients.NewVariableImpact * newVariable // adding new variable impact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
