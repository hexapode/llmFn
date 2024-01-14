/** // 0.5038990150740066 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15663438, Surname=Hsieh, CreditScore=693, Geography=Germany, Gender=Male, Age=37.0, Tenure=9, Balance=160132.75, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=174815.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.34,
        CustomParameterImpact: -1.30, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00,
        TenureBalanceRatio: 0.025,
    };

    let tenureBalanceRatio = Balance / Tenure * coefficients.TenureBalanceRatio;
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.24;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.96;
    } else {
        geographyImpact = -1.07;
    }

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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.11 : -1.11) +
        coefficients.SurnameImpact * (Surname.length > 5 ? 0.42 : -1.18) +
        coefficients.NewParameterImpact * tenureBalanceRatio
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample Input
console.log(PredictExited(15663438, 'Hsieh', 693, 'Germany', 'Male', 37.0, 9, 160132.75, 2, 1.0, 0.0, 174815.54));
