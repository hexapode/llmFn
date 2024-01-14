/** // 0.5028862699033327 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15668058, Surname=Chinwendu, CreditScore=661, Geography=Germany, Gender=Male, Age=35.0, Tenure=6, Balance=124098.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=86678.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        NovelComboImpact: 0.03,  // new coefficient for the novel combination of variables
    };

    // ... (previous calculations)

    // New novel combination of variables
    let novelComboVariable = (Age * Balance) / (Tenure * NumOfProducts);
    let novelComboImpact = novelComboVariable * coefficients.NovelComboImpact;

    // ... (previous calculations)

    // Add new novel combination of variables to the linear combination
    let linearCombination = (
        // ... (previous linear combination) + 
        novelComboImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
