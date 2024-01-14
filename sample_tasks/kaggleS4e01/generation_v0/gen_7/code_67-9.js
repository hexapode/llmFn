/** // 0.6507485462201079 //**/
/**
I try on the following input and it returned 0.990055725407088" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15642787, Surname=Ijendu, CreditScore=738, Geography=France, Gender=Male, Age=37.0, Tenure=1, Balance=133043.66, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=111243.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simplified coefficients
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.02,
        Tenure: -0.01,
        Balance: 0.00003,
        NumOfProducts: -0.03,
        IsActiveMember: -0.5,
        GeographyImpact: 0.3,
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.8;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.6;
    }

    // Calculate the linear combination
    let linearCombination =
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact;

    // Calculate probability using logistic function
    const probability = 1.0 / (1.0 + Math.exp(-linearCombination));

    return probability;
}
