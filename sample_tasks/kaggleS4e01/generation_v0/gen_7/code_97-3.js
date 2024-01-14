/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15699247, Surname=T'ien, CreditScore=815, Geography=France, Gender=Female, Age=46.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=159835.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        NovelImpact: 0.09,  // New coefficient for the novel impact
    };

    // ... (existing code)

    // Novel combination of variable
    let novelImpactVariable = (CustomerId * Age + 100) / (Math.pow(Tenure, 2) + 1);

    // Adding the novel impact to the linear combination
    let linearCombination = (
        // ... (existing terms)
        + coefficients.NovelImpact * novelImpactVariable
    );

    // ... (existing code)

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

// Sample input:
PredictExited(15699247, "T'ien", 815, "France", "Female", 46.0, 3, 0.0, 1, 0.0, 1.0, 159835.45);
