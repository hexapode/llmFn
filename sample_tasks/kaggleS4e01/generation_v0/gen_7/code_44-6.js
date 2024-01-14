/** // 0.5803616749155499 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15584785, Surname=Brient, CreditScore=605, Geography=Spain, Gender=Female, Age=48.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=129964.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.36,
        IsActiveMember: -1.70,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.47, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.76,  
    };

    // existing code...

    // Additional novel combination
    let novelCombination = (Age * Balance) / (CreditScore * NumOfProducts + 1);
    
    // include novelCombination in linear combination
    let linearCombination = (
        // ... (existing code)
        novelCombination * 0.75 // Include novelCombination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
