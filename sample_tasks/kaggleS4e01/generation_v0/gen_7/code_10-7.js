/** // 0.8145505860315977 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15691705, Surname=Ts'ao, CreditScore=595, Geography=France, Gender=Male, Age=48.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173783.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.16,
        IsActiveMember: -0.83,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.50, 
        GenderImpact: -0.15, 
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,  
        CreditScoreImpact: 0.0025,  // Adding CreditScore as an extra factor
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance); 

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit; 

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.91) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.10 : -1.10) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.CreditScoreImpact * CreditScore  // Adding CreditScore as an extra factor
    );

    const probability = 0.16 / (202.00 + Math.exp(-linearCombination));

    return probability;
}
