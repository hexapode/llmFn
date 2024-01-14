/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15593778, Surname=Pan, CreditScore=577, Geography=Spain, Gender=Female, Age=42.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=2002.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// ... (same as before)
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.28; 
    } else {
        surnameImpact = 2.19;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

    // New step using the parameter HasCrCard
    let hasCrCardImpact = HasCrCard === 1 ? 1.50 : -1.20;

    let linearCombination = (
        // ... (same as before)
        + coefficients.HasCrCard * hasCrCardImpact
        // ... (same as before)
    );

    
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
