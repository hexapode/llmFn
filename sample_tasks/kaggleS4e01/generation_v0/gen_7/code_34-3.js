/** // 0.5803614072908377 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15802570, Surname=Ts'ao, CreditScore=646, Geography=Germany, Gender=Male, Age=21.0, Tenure=2, Balance=117866.92, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=151581.79.
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
        AgeBalanceImpact: 0.03, 
        CreditScoreImpact: 0.00, 
        NovelImpact: 0.10  // New coefficient for novel combination of variables
    };

    // ... (previous variable calculations remain the same)

    // New combination of variables (Age * Balance * NumOfProducts)
    let novelCombinationVariable = Age * Balance * NumOfProducts * coefficients.NovelImpact;

    // ... (rest of the function remains the same)

    let linearCombination = (
        // ... (previous linear combination remains the same)
        novelCombinationVariable
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
