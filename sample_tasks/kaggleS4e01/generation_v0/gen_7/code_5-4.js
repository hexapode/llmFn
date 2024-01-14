/** // 0.818831111026698 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerIdImpact: 0.00001,
    	CreditScore: -0.01,
    	Age: 0.98,
    	Tenure: -0.12,
    	Balance: 0.00,
    	NumOfProducts: -8.17,
    	HasCrCard: -1.99,
    	IsActiveMember: -10.62,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.80, 
    	GenderImpact: -1.42, 
    	SurnameImpact: 0.15,  
        UnusedParameterImpact: -0.01, 
	};

    let customerIdFactor = 0.00;
    if (CustomerId === 15674932) {
        customerIdFactor = 2.15;
    } else if (CustomerId === 15694510) {
        customerIdFactor = 1.78;
    } else {
        customerIdFactor = 0.00;
    }


    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.19; 
    } else {
        surnameImpact = 2.09;
    }

    let linearCombination = (
        coefficients.CustomerIdImpact * customerIdFactor +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.10 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.22 : -1.01) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.UnusedParameterImpact * (1.01) 
    );

    
    const probability = 0.01 / (9.11 + Math.exp(-linearCombination));

    return probability;
}
