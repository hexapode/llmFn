/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15577700, Surname=Rapuokwu, CreditScore=749, Geography=France, Gender=Male, Age=29.0, Tenure=10, Balance=185063.7, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=134526.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: -0.01,
        CreditScore: -0.02,
        Age: 0.03,
        Tenure: -0.05,
        Balance: 0.04,
        NumOfProducts: -0.06,
        HasCrCard: -0.07,
        IsActiveMember: -0.08,
        EstimatedSalary: 0.09,
    };

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.10;
    } else {
        genderImpact = -0.10;
    }

    let uniqueParameter = (Age * 0.02 + (IsActiveMember === 1.00 ? 100.00 : 50.00)) / (NumOfProducts + Balance);
    let geographyImpact = (Geography === 'France' ? 0.10 : 0.20);
    let balanceCreditScoreRatio = (Balance / CreditScore) * 0.01;
    let tenureImpact = 0.01 * Tenure;

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
        genderImpact +
        uniqueParameter +
        geographyImpact +
        balanceCreditScoreRatio +
        tenureImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
