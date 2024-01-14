/** // 0.5548604815781787 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15613787, Surname=Chidubem, CreditScore=505, Geography=France, Gender=Male, Age=35.0, Tenure=7, Balance=116932.59, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=91092.84.
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
        NewFeatureImpact: 0.10,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance); 
    let newFeature = Math.sqrt(EstimatedSalary) - 100; 

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
        coefficients.NewFeatureImpact * newFeature +
        customerIdImpact
    );

    const probability = 0.16 / (202.00 + Math.exp(-linearCombination));

    return probability;
}
