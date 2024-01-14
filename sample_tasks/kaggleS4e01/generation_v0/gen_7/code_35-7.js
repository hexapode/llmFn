/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15776596, Surname=Hsu, CreditScore=591, Geography=Spain, Gender=Male, Age=34.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=125646.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.49,
        HasCrCard: -0.16,
        IsActiveMember: -0.79,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.43,
        CustomParameterImpact: -1.32, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        NewVariableImpact: 0.20, // Adding a new variable and its impact
    };

    // ... (previous code remains the same)

    let newVariable = 0.00; // Calculating the impact of a new variable
    if (HasCrCard === 0 && IsActiveMember === 1) {
        newVariable = 1.58;
    } else {
        newVariable = -0.79;
    }

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.NewVariableImpact * newVariable + // Including the impact of the new variable
        // ... (remaining code remains the same)
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
