/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15772995, Surname=T'ien, CreditScore=621, Geography=France, Gender=Male, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=163830.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewVariableImpact: 0.05,
    };

    let surnameLength = Surname.length;
    let surnameImpact = surnameLength <= 5 ? -1.18 : 0.43;

    let newVariable = (CreditScore * Age + Tenure) / (1 + NumOfProducts + Balance);
    let newVariableImpact = newVariable * coefficients.NewVariableImpact;

    let linearCombination = (
        // ... (same linear combination as before)
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newVariable +
        coefficients.NewVariableImpact * newVariableImpact
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
