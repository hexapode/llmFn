/** // 0.6907724288821395 //**/
/**
I try on the following input and it returned 0.9900990099009901" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15683522, Surname=Chukwujamuike, CreditScore=646, Geography=Germany, Gender=Female, Age=41.0, Tenure=5, Balance=107879.04, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=122268.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: -0.0046,
        Age: 0.072,
        Tenure: -0.015,
        Balance: 0.00005,
        NumOfProducts: -0.25,
        HasCrCard: -0.088,
        IsActiveMember: -0.891,
        EstimatedSalary: 0.0000001,
        Geography_Germany: 0.426,
        Geography_Spain: -0.24,
        Gender_Female: -0.123,
        SurnameImpact: 0.005
    };

    let genderImpact = (Gender === 'Female') ? coefficients.Gender_Female : 0;
    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = coefficients.Geography_Germany;
    } else if (Geography === 'Spain') {
        geographyImpact = coefficients.Geography_Spain;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        genderImpact +
        geographyImpact +
        coefficients.SurnameImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
