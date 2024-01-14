/** // 0.5346789812848503 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15615020, Surname=Chizoba, CreditScore=850, Geography=France, Gender=Male, Age=30.0, Tenure=6, Balance=115350.93, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=92406.43.
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
        NovelImpact: 0.05,  // New coefficient for the novel combination
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.28;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  
    
    let novelCombination = (CreditScore * Tenure) / (Age + NumOfProducts);  // Novel combination of variables

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
        coefficients.NovelImpact * novelCombination +  // Adding the impact of the novel combination
        customerIdImpact
    );

    const probability = 0.05 / (11.11 + Math.exp(-linearCombination));

    return probability;
}
