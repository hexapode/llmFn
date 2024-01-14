/** // 0.4982244327345527 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// other coefficients remain unchanged
    	CustomerIdImpact: 0.007
	};

    // Transform the CustomerId into a smaller impact value
    let customerIdImpact = (CustomerId % 100000) * coefficients.CustomerIdImpact;

    // Other computations remain unchanged
    
    let linearCombination = (
        // previous terms remain unchanged
        coefficients.CustomerId * CustomerId +
        // previous terms remain unchanged
        coefficients.CustomerIdImpact * customerIdImpact
    );

    const probability = 0.01 / (10.00 + Math.exp(-linearCombination));

    return probability;
}
