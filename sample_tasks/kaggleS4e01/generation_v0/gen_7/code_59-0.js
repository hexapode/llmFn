/** // 0.5415825537438227 //**/
/**
I try on the following input and it returned 0.11489830325686115" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15711742, Surname=Mason, CreditScore=708, Geography=France, Gender=Male, Age=34.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=62868.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.01,
        Age: -0.05,
        Tenure: -0.02,
        NumOfProducts: -0.50,
        HasCrCard: -0.35,
        IsActiveMember: -1.50,
        GeographyImpact: 0.30,
        GenderImpact: -0.20,
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.50;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.40;
    } else {
        geographyImpact = -0.30;
    }

    let genderImpact = (Gender === 'Male' ? -0.10 : 0.10);
    
    let linearCombination = (
        CreditScore * coefficients.CreditScore +
        Age * coefficients.Age +
        Tenure * coefficients.Tenure +
        NumOfProducts * coefficients.NumOfProducts +
        HasCrCard * coefficients.HasCrCard +
        IsActiveMember * coefficients.IsActiveMember +
        geographyImpact * coefficients.GeographyImpact +
        genderImpact * coefficients.GenderImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
