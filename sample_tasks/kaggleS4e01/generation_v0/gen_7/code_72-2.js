/** // 0.499199960463379 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15683483, Surname=Steere, CreditScore=714, Geography=Germany, Gender=Female, Age=41.0, Tenure=3, Balance=95293.86, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=125710.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.20,  
        ExtraParameterImpact: 0.78,  
        NovelParameterImpact: 0.03,  
    };

    // ... (previous calculations remain the same) ...
    
    let novelCombination = (Age * Balance + Tenure) * (NumOfProducts + EstimatedSalary) / (HasCrCard + 1);

    let linearCombination = (
        // ... (previous linear combination calculations) ...
        + coefficients.NovelParameterImpact * novelCombination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
