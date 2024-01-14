/** // 0.5015116631092668 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	//... (other coefficients remain the same)
    	CustomerIdImpact: 0.05,
    	//...
	};

    let lastDigit = CustomerId % 10;
    let customerIdImpact = lastDigit * 0.05;

    //... (other parts of the function remain the same)

    let linearCombination = (
        //... (other parts of the linear combination remain the same)
        + coefficients.CustomerIdImpact * customerIdImpact
    );

    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
