/** // 0.5757809080066326 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15638003, Surname=Tien, CreditScore=585, Geography=France, Gender=Female, Age=46.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=55775.84.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NovelImpact: 0.03 // Adding a new coefficient for the novel impact
    };

    // ... (same as before)

    let novelCombination = (Age * Balance * Tenure) / (Math.abs(HasCrCard - 1.00) + NumOfProducts);
  
    let linearCombination = (
        // ... (same as before)
        + coefficients.NovelImpact * novelCombination // Adding the impact of the novel combination 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));
    
    return probability;
}
