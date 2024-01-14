/** // 0.743475930882014 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15612043, Surname=Lo Duca, CreditScore=850, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=120905.03, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=176833.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.49, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.78,  
        NovelCombinationImpact: 0.25
    };

    // ... (other existing variable calculations)

    // New variable calculation
    let novelCombination = (CreditScore / 500) + (Age * 0.1);
    
    let linearCombination = (
        // ... (existing linear combination)
        coefficients.NovelCombinationImpact * novelCombination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
