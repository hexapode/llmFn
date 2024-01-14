/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.7878577462333343" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15762715, Surname=Ts'ui, CreditScore=577, Geography=France, Gender=Female, Age=46.0, Tenure=1, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=6078.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.03,
        CreditScore: 0.004,
        Age: 0.08,
        Tenure: -0.04,
        Balance: 0.0003,
        NumOfProducts: -0.25,
        HasCrCard: -0.15,
        IsActiveMember: -0.35,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.25,
        GenderImpact: -0.10,
        SurnameImpact: 0.08,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5) {
        surnameImpact = -0.12;
    } else {
        surnameImpact = 0.20;
    }

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.35;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.15;
    } else {
        geographyImpact = 0.00;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.5 : -1.0) +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
