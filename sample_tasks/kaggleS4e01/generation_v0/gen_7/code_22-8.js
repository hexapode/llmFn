/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15753861, Surname=Blue, CreditScore=786, Geography=France, Gender=Male, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=133535.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.03,
        CreditScore: 0.06,
        Age: -0.04,
        Tenure: 0.02,
        Balance: 0.01,
        NumOfProducts: -0.02,
        HasCrCard: -0.03,
        IsActiveMember: -0.05,
        EstimatedSalary: 0.02,
        GeographyImpact: 0.05,
        GenderImpact: -0.03,
        SurnameImpact: 0.01,
        NewParameterImpact: 0.02,
        AdditionalImpact: 0.03,
        CustomParameterImpact: -0.04,
        AgeBalanceImpact: 0.01,
        CreditScoreImpact: 0.06,
        LoyaltyImpact: 0.02,
    };

    let loyaltyImpact = 0.00;
    if (Tenure >= 5) {
        loyaltyImpact = 0.05;
    } else {
        loyaltyImpact = -0.03;
    }

    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact;

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.10 : 0.05) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.03 : -0.02) +
        coefficients.SurnameImpact * (Surname.length * 0.01) +
        coefficients.NewParameterImpact * (Age * Balance / NumOfProducts) +
        customerIdImpact +
        coefficients.AdditionalImpact * Math.abs(CreditScore - 600) / 300 +
        coefficients.CustomParameterImpact * (Age * Age / (EstimatedSalary + 1000)) +
        ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore + loyaltyImpact
    );

    const probability = 0.16 / (1 + Math.exp(-linearCombination));

    return probability;
}
