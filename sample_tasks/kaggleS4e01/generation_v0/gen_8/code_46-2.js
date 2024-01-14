/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15573769, Surname=Fiorentini, CreditScore=764, Geography=Spain, Gender=Male, Age=24.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=186105.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)
    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (previous code remains the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted parameters) +
        unusedParameterImpact + 
        // ... (other parameters) +
        numOfProductsWeight + 
        tenureNumProductsInteractionWeight;

    const probability = 0.30 / (0.94 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15573769.00, "Fiorentini", 764.00, "Spain", "Male", 24.00, 3.00, 0.0, 2.00, 1.00, 0.0, 186105.99);
console.log(result);
