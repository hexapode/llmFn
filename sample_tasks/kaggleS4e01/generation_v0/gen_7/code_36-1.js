/** // 0.4901818158285769 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15693347, Surname=Chukwufumnanya, CreditScore=745, Geography=Spain, Gender=Female, Age=48.0, Tenure=1, Balance=114543.58, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=61315.37.
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
        IsActiveMember: -0.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.43,
        CustomParameterImpact: -1.42, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        NovelImpact: 0.1  // New coefficient
    };

    // ... (existing code)

    // New parameter calculation
    let novelCombination = (Age * 0.2 + Tenure * 0.05 - Balance * 0.1) / NumOfProducts;

    let linearCombination = (
        // ... (previous linearCombination calculation)
        coefficients.NovelImpact * novelCombination  // Incorporating the new parameter
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
