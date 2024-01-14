/** // 0.5694695784709921 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15628155, Surname=Echezonachukwu, CreditScore=758, Geography=France, Gender=Female, Age=30.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98896.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.00, 
        SampleVariableImpact: 0.10,  // new variable and its impact coefficient
    };

    // Other variables and calculations remain the same as previous function

    let sampleVariable = Math.abs(HasCrCard - IsActiveMember);

    let linearCombination = (
        // ... (previous coefficients' contribution)
        coefficients.SampleVariableImpact * sampleVariable  // incorporating the new variable
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
