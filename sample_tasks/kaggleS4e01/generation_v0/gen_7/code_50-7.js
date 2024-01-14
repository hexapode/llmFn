/** // 0.7678420642112948 //**/
/**
I try on the following input and it returned 0.6303930982317258" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15742668, Surname=Pagnotto, CreditScore=713, Geography=France, Gender=Male, Age=38.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=5597.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.0045,
        Age: 0.0723,
        Tenure: -0.0241,
        NumOfProducts: -0.3078,
        HasCrCard: -0.1848,
        IsActiveMember: -0.7588,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.2423,
        GenderImpact: -0.1527,
        SurnameImpact: 0.0421,
        CustomerIdImpact: 0.0000007
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.1317;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.1132;
    } else {
        geographyImpact = -0.1223;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.233 : -0.234) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.216 : 0.137) +
        coefficients.CustomerIdImpact * (CustomerId % 10)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
