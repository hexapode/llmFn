/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15579548, Surname=Nwokeocha, CreditScore=607, Geography=Spain, Gender=Male, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=178291.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// ... (other coefficients remain the same)
    	BalanceImpact: -0.00005, // New coefficient for the balance impact
        // ... (other coefficients remain the same)
	};

    // ... (other parts of the function remain the same)

    let balanceToSalaryRatio = Balance / EstimatedSalary; 
    let balanceImpact = 0.00;

    if (balanceToSalaryRatio > 0.5) {
        balanceImpact = 1.50; // Higher positive impact for customers with a high balance relative to salary
    } else {
        balanceImpact = -1.00; // Negative impact for customers with a low balance relative to salary
    }

    let linearCombination = (
        // ... (previous linear combination calculation remains the same)
        coefficients.BalanceImpact * balanceImpact * balanceToSalaryRatio +  // Include balance impact in the linear combination
        // ... (other parts of the linear combination calculation remain the same)
    );

    // ... (rest of the function remains the same)
}
