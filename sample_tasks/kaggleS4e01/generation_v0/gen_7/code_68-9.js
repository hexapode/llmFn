/** // 0.793570319950046 //**/
/**
I try on the following input and it returned 0.9895611358158152" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15777075, Surname=Lupton, CreditScore=675, Geography=France, Gender=Male, Age=34.0, Tenure=2, Balance=140197.43, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=168523.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.0041,
        Age: 0.0725,
        Tenure: -0.0149,
        Balance: 9.7e-07,
        NumOfProducts: -0.5305,
        HasCrCard: -0.1489,
        IsActiveMember: -1.0666,
        EstimatedSalary: -4.2e-07,
        GeographyFranceImpact: -0.5571,
        GeographyGermanyImpact: 0.7283,
        GeographySpainImpact: -0.4538,
        GenderMaleImpact: -0.2366,
        SurnameLuptonImpact: -0.4293,
        SurnameOtherImpact: 0.2134
    };

    let surnameImpact = Surname === "Lupton" ? coefficients.SurnameLuptonImpact : coefficients.SurnameOtherImpact;

    let geographyImpact = 0;
    if (Geography === 'France') {
        geographyImpact = coefficients.GeographyFranceImpact;
    } else if (Geography === 'Germany') {
        geographyImpact = coefficients.GeographyGermanyImpact;
    } else if (Geography === 'Spain') {
        geographyImpact = coefficients.GeographySpainImpact;
    }

    let genderImpact = Gender === 'Male' ? coefficients.GenderMaleImpact : 0;

    let linearCombination = (
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
        surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
