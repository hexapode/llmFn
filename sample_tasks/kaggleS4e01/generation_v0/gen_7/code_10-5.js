/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15809837, Surname=Onochie, CreditScore=822, Geography=France, Gender=Male, Age=36.0, Tenure=8, Balance=121359.73, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179964.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.01,
        CreditScore: 0.008,
        Age: 0.05,
        Tenure: -0.04,
        Balance: 0.00002,
        NumOfProducts: -0.035,
        HasCrCard: -0.1,
        IsActiveMember: -0.15,
        EstimatedSalary: 0.00003,
        GeographyImpact: 0.3,
        GenderImpact: -0.1,
        SurnameImpact: 0.02,
        NewParameterImpact: 0.01,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 7) {
        surnameImpact = -0.2; 
    } else {
        surnameImpact = 0.5;
    }
    
    let newParameter = (Age * (NumOfProducts + Tenure)) / (1 + Balance);

    let lastDigit = CustomerId % 10;
    let customerIdImpact = 0.002 * lastDigit; 

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.9 : -0.8) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 1.8 : -0.9) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact
    );

    const probability = 0.2 / (1 + Math.exp(-linearCombination));

    return probability;
}
