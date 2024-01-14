/** // 0.7654932649508871 //**/
/**
I try on the following input and it returned 0.0000012500574778346314" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15572547, Surname=McCardle, CreditScore=611, Geography=Spain, Gender=Male, Age=33.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=164074.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.06,
    	Tenure: -0.05,
    	Balance: 0.00,
    	NumOfProducts: -0.74,
    	HasCrCard: -0.24,
    	IsActiveMember: -1.50,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 1.00, 
    	GenderImpact: -1.00, 
    	SurnameImpact: 0.15,  
        UnusedParameterImpact: -0.01, 
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.20; 
    } else {
        surnameImpact = 0.20;
    }

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.50 : -0.30) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 0.70 : -0.70) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.UnusedParameterImpact * (1.01) 
    );

    
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
