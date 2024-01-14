/** // 0.5194379665453618 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15657284, Surname=Day, CreditScore=674, Geography=Germany, Gender=Male, Age=43.0, Tenure=7, Balance=106901.42, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=184520.0.
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
        GeographyImpact: 0.49,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.03, // Impact of Unused Parameter
    };

    // ... (previous calculation remains the same)

    let unusedParameter = (Tenure - NumOfProducts) / (HasCrCard + 1);
    
    let linearCombination = (
        // ... (previous linear combination remains the same)
        coefficients.UnusedParameterImpact * unusedParameter // Impact of Unused Parameter
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
