/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.14743075569352343" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15584584, Surname=Ejimofor, CreditScore=661, Geography=France, Gender=Male, Age=34.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=121299.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.000013,
        CreditScore: -0.0075,
        Age: 0.065,
        Tenure: -0.046,
        Balance: 0.000075,
        NumOfProducts: -0.221,
        HasCrCard: -0.078,
        IsActiveMember: -0.722,
        EstimatedSalary: 0.00000009,
        Geography_France: 0.142,
        Geography_Germany: -0.254,
        Geography_Spain: 0.079,
        Gender_Male: 0.186,
        SurnameImpact: 0.033
    };

    let geographyImpact = 0.00;
    
    if (Geography === 'France') {
        geographyImpact = coefficients.Geography_France;
    } else if (Geography === 'Germany') {
        geographyImpact = coefficients.Geography_Germany;
    } else {
        geographyImpact = coefficients.Geography_Spain;
    }

    let genderImpact = (Gender === 'Male') ? coefficients.Gender_Male : 0;

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
        geographyImpact +
        genderImpact +
        coefficients.SurnameImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
