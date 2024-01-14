/** // 0.6426937050712596 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15763806, Surname=Scott, CreditScore=741, Geography=France, Gender=Male, Age=44.0, Tenure=3, Balance=120193.42, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=103764.75.
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

    let creditScoreImpact = 0.002 * CreditScore; 

    let balanceImpact = 0.0000001 * Math.pow(Balance, 2);
    
    let ageTenureImpact = (Age * 0.01) * (Tenure * 0.02);

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
        newParameter +
        customerIdImpact + 
        creditScoreImpact +
        balanceImpact +
        ageTenureImpact
    );

    const probability = 0.05 / (11.11 + Math.exp(-linearCombination));

    return probability;
}
