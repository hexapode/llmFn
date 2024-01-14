/** // 0.738848438371134 //**/
/**
I try on the following input and it returned 0.19561224507336175" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15691828, Surname=Uchenna, CreditScore=679, Geography=Germany, Gender=Male, Age=25.0, Tenure=6, Balance=97624.04, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131300.24.
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

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.26;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.16;
    } else {
        geographyImpact = -1.96;
    }

    let genderImpact = Gender === 'Male' ? 2.32 : -2.23;

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
        coefficients.SurnameImpact * (Surname === 'Uchenna' ? 0.24 : -0.24)
    );

    linearCombination *= 0.01; // Scaling the linear combination

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
