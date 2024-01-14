/** // 0.6613655438284713 //**/
/**
I try on the following input and it returned 0.5969905415496692" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15671322, Surname=Chien, CreditScore=724, Geography=Germany, Gender=Male, Age=30.0, Tenure=7, Balance=115315.04, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=15216.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.0046,
        Age: 0.0657,
        Tenure: -0.0048,
        Balance: 0.0003,
        NumOfProducts: -0.5105,
        HasCrCard: -0.1313,
        IsActiveMember: -0.8425,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.1717,
        GenderImpact: -0.0704,
        SurnameImpact: 0.0004,
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.2804;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.1864;
    } else {
        geographyImpact = -0.0941;
    }

    let genderImpact = (Gender === 'Male' ? -0.1856 : 0.0708);

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
        coefficients.SurnameImpact * Surname.length
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
