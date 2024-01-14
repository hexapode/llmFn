/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15594577, Surname=Hs?, CreditScore=616, Geography=France, Gender=Female, Age=37.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183490.99.
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
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
    };

    // ... (previous calculations remain the same)

    // New step in the computation
    const novelCombination = (Balance + (Age * 2.5)) / (NumOfProducts + 1);
    let novelCombinationImpact = novelCombination * 0.05; // Arbitrary impact coefficient, can be adjusted based on the significance of the novel combination
       
    let linearCombination = (
        // ... (previous linear combination remains the same)
        coefficients.NewCombinationImpact * novelCombinationImpact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
