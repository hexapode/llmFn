/** // 0.4982244327345527 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15582841, Surname=Zetticci, CreditScore=598, Geography=France, Gender=Male, Age=40.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=103764.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	// ... (other coefficients remain the same)
        TenureImpact: -0.08,
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.28; 
    } else {
        surnameImpact = 2.19;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.09 : -1.20) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.32 : -0.90) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        coefficients.TenureImpact * Tenure
    );

    
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
