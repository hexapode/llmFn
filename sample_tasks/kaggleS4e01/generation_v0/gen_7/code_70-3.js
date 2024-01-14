/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15614365, Surname=Ting, CreditScore=633, Geography=France, Gender=Male, Age=33.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=145528.22.
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

    // ... existing code ...

    // Novel combination of a new variable
    let novelParameter = (Age * Tenure + Balance) / (NumOfProducts + EstimatedSalary);
    
    // ... existing code ...

    let linearCombination = (
        // ... existing terms ...
        coefficients.NewParameterImpact * newParameter +
        coefficients.NovelParameterImpact * novelParameter + // Adding the novel parameter impact
        // ... existing terms ...
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
