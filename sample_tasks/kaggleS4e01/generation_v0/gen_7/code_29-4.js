/** // 0.42300567538719047 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15810167, Surname=Scott, CreditScore=690, Geography=Spain, Gender=Female, Age=35.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=70618.0.
**/

// Added a new parameter called "novelCombination" using a novel combination of variables

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
        NovelCombinationImpact: 0.03, // Impact of the novel combination
    };

    // ... (previous code remains the same)

    // New novel combination of variables
    let novelCombination = (Age * NumOfProducts) / (Balance + Tenure);

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (previous linear combination code remains the same)
        + coefficients.NovelCombinationImpact * novelCombination // Adding the novel combination impact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
