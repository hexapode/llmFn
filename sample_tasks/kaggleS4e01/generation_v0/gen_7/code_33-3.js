/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15756475, Surname=Kenniff, CreditScore=551, Geography=Germany, Gender=Male, Age=31.0, Tenure=9, Balance=82293.82, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=91565.25.
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
        NovelImpact: 0.05,  // New coefficient for novel variable
    };

    // ... previous variable computations ...

    // New variable:
    let novelVariable = (Age * Balance) / (Tenure + 1);

    let linearCombination = (
        // ... previous variables ...
        coefficients.NovelImpact * novelVariable +  // Include the novel variable impact in the linear combination
        // ... previous variables ...
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
