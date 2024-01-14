/** // 0.5017334625914053 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// ...coefficients for other parameters
    	CustomerIdImpact: 0.05, // Coefficient for CustomerId impact
	};

    let lastDigitImpact = ((CustomerId % 10) % 3) - 1; // Calculate the impact based on the last digit

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.28; 
    } else {
        surnameImpact = 2.19;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

    let linearCombination = (
        // ...previous linear combination calculation
        coefficients.CustomerIdImpact * lastDigitImpact // Adding CustomerId impact to the linear combination
    );

    
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
