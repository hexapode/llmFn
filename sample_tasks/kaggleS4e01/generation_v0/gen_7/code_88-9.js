/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15623369, Surname=Scott, CreditScore=597, Geography=Spain, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=66586.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.01,
        CreditScore: -0.02,
        Age: 0.01,
        Tenure: 0.00,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.40,
        IsActiveMember: -0.70,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.30,
        GenderImpact: -0.20,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.02,
        AdditionalImpact: 0.20,
        AgeBalanceImpact: 0.00,
        CreditScoreImpact: 0.00,
        UnusedParameterImpact: 0.30,
    };

    let genderImpact = (Gender === 'Male' ? 0.20 : -0.20);
    let surnameLengthImpact = (Surname.length <= 5 ? -0.30 : 0.30);
    let geographyImpact = (Geography === 'Germany' ? 0.30 : (Geography === 'France' ? -0.15 : 0.00));
    let tenureImpact = (Tenure > 5 ? -0.10 : 0.00);
    let ageBalanceRatio = Age / (Balance + 1.00);
    let ageBalanceImpact = (ageBalanceRatio > 2.00 ? 0.40 : -0.10);
    let isActiveMemberImpact = (IsActiveMember === 1.00 ? -0.40 : 0.00);
    
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
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameLengthImpact +
        coefficients.NewParameterImpact * (Age * Tenure) +
        coefficients.AdditionalImpact * (NumOfProducts + Balance) +
        coefficients.AgeBalanceImpact * ageBalanceImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
