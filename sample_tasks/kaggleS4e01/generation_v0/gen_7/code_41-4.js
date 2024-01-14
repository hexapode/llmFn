/** // 0.537471306000827 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15705735, Surname=Kaeppel, CreditScore=581, Geography=Germany, Gender=Female, Age=40.0, Tenure=1, Balance=131402.21, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=109496.69.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.27,
        IsActiveMember: -1.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.43,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
    };

    let surnameLength = Surname.length;
    let surnameImpact = (surnameLength <= 5.00) ? -2.29 : 1.46;
  
    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 202.46)) / (NumOfProducts + Balance);
  
    let genderImpact = (Gender === 'Male') ? 2.32 : -2.23;
  
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.26 : (Geography === 'Spain' ? -2.16 : -1.96)) +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact +
        newParameter - 1198.00 / 800.00
    );
  
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));
  
    return probability;
}
