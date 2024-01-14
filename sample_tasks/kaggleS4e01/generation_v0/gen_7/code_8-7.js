/** // 0.7659486363212837 //**/
/**
I try on the following input and it returned 0.012499387080430815" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15689953, Surname=Trevisano, CreditScore=695, Geography=France, Gender=Male, Age=43.0, Tenure=1, Balance=127616.56, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=46998.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // Coefficients for the linear combination
    const coefficients = {
        CustomerId: 0.00000001,
        CreditScore: -0.0001,
        Age: 0.005,
        Tenure: -0.01,
        Balance: 0.0000001,
        NumOfProducts: -0.5,
        HasCrCard: -0.1,
        IsActiveMember: -0.8,
        EstimatedSalary: 0.00000004,
        GeographyImpact: 0.3, 
        GenderImpact: -0.2, 
        SurnameImpact: 0.01,
        NewParameterImpact: 0.01 
    };

    let surnameLength = Surname.length; 
    let surnameImpact = surnameLength <= 5 ? -0.2 : 0.2;

    let newParameter = (Age * Tenure) / (NumOfProducts + 1);  

    let lastDigit = CustomerId % 10;
    let customerIdImpact = -0.05 * lastDigit; 

    // Compute the linear combination
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

    // Calculate the churn probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
