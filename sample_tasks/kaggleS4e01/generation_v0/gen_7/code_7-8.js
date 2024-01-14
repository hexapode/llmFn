/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// ... (existing coefficients)
	};

    // ... (existing logic)

    const lastDigit = CustomerId % 10;
    let customerIdImpact = 0.00;

    if (lastDigit % 2 === 0) {
        customerIdImpact = 1.50;
    } else {
        customerIdImpact = -1.20;
    }

    let linearCombinationWithCustomerId = linearCombination + customerIdImpact;

    const probability = 0.01 / (0.80 + Math.exp(-linearCombinationWithCustomerId));

    return probability;
}
