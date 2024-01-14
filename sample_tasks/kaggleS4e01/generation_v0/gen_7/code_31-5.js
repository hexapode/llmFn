/** // 0.5803616749155499 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15574760, Surname=Chiemela, CreditScore=699, Geography=France, Gender=Female, Age=41.0, Tenure=2, Balance=134870.79, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=105961.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.34,
        CustomParameterImpact: -1.30, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        NovelCombinationImpact: 0.15,  // New coefficient for novel combination of variables
    };

    // ... (previous computations remain the same)

    // New combination of variables
    let novelCombination = (Age * Balance) / (NumOfProducts + Tenure);
    let novelCombinationImpact = novelCombination * coefficients.NovelCombinationImpact;

    // Remaining code remains the same

    let linearCombination = (
        // ... (previous coefficients and linear combination)
        + novelCombinationImpact  // include the impact of the novel combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
