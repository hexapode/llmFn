/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15582033, Surname=Cremonesi, CreditScore=684, Geography=Spain, Gender=Female, Age=21.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=113046.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        // ... (other coefficients remain the same)
        NovelCombinationImpact: 0.03, // new coefficient for novel combination
    };

    // ... (other parts of the function remain the same)

    // New novel combination of variables
    let novelCombination = (Age * Balance + (HasCrCard === 1.00 ? 1000.00 : 407.13)) / Math.pow(NumOfProducts + 1, 2);

    let linearCombination = (
        // ... (previous linear combination)
        coefficients.NovelCombinationImpact * novelCombination + // adding the impact of the novel combination
    );

    // ... (rest of the function remains the same)
}
