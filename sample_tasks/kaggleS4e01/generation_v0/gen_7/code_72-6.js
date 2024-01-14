/** // 0.6314362223242297 //**/
/**
I try on the following input and it returned 0.9900718468877377" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15738889, Surname=Maclean, CreditScore=692, Geography=France, Gender=Male, Age=46.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=26260.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.001,
        CreditScore: -0.004,
        Age: 0.050,
        Tenure: -0.027,
        Balance: 0.0003,
        NumOfProducts: -0.369,
        HasCrCard: -0.160,
        IsActiveMember: -1.158,
        EstimatedSalary: 0.000001,
        GeographyFrance: -0.016,
        GeographyGermany: 0.819,
        GeographySpain: -0.871,
        GenderMale: 0.545,
        GenderFemale: -0.632,
        SurnameImpact: 0.002,
    };

    let geographyImpact = 0.00;
    if (Geography === 'France') {
        geographyImpact = coefficients.GeographyFrance;
    } else if (Geography === 'Germany') {
        geographyImpact = coefficients.GeographyGermany;
    } else {
        geographyImpact = coefficients.GeographySpain;
    }

    let genderImpact = (Gender === 'Male') ? coefficients.GenderMale : coefficients.GenderFemale;

    let linearCombination = (
        coefficients.CustomerId * (CustomerId % 100) +
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
        coefficients.SurnameImpact * Surname.length
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
