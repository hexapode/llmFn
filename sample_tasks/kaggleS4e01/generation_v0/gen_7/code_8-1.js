/** // 0.6912330424836582 //**/
/**
I try on the following input and it returned 0.0008597812230364403" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15779914, Surname=Ts'ui, CreditScore=718, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=98459.6, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=75786.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: -0.0006,
        Age: 0.072,
        Tenure: -0.047,
        Balance: 0.0001,
        NumOfProducts: -0.504,
        HasCrCard: -0.291,
        IsActiveMember: -0.750,
        EstimatedSalary: 0.0000003,
        GeographyImpact: 0.298, 
        GenderImpact: -0.142, 
        SurnameImpact: 0.041,
        NewParameterImpact: 0.020,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.182; 
    } else {
        surnameImpact = 0.175;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 1);  

    
    let lastDigit = CustomerId % 10;
    let customerIdImpact = -0.005 * lastDigit; 

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : -1) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
