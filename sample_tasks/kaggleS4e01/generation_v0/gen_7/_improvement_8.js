/* Best score: 0.8217602716416751 */


    /* I try on the following input and it returned 0.0008597812230364403" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15779914, Surname=Ts'ui, CreditScore=718, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=98459.6, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=75786.4. */
    
    /** // 0.6912330424836582 //**/
/**
I try on the following input and it returned 0.0008597812230364403" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15779914, Surname=Ts'ui, CreditScore=718, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=98459.6, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=75786.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.06,
        Balance: 0.00,
        NumOfProducts: -0.39,
        HasCrCard: -0.16,
        IsActiveMember: -0.84,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.40, 
        GenderImpact: -0.15, 
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.28;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

    
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.90) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.11 : -1.10) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact
    );

    const probability = 0.05 / (11.11 + Math.exp(-linearCombination));

    return probability;
}
