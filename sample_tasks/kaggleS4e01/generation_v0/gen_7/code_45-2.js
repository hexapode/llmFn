/** // 0.6795565195213128 //**/
/**
I try on the following input and it returned 0.8515998988241112" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15631927, Surname=T'ao, CreditScore=634, Geography=France, Gender=Male, Age=35.0, Tenure=7, Balance=136291.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=54113.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Updated coefficients based on the input parameters' impact on customer churn
    const coefficients = {
        CreditScore: -0.004,
        Age: 0.06,
        Tenure: -0.02,
        Balance: 0.000075,
        NumOfProducts: -0.3,
        HasCrCard: -0.15,
        IsActiveMember: -0.8,
        EstimatedSalary: 0.0000003,
        GeographyImpact: 0.35,
        GenderImpact: -0.18,
        SurnameImpact: 0.02,
    };

    let genderImpact = (Gender === 'Male') ? 0.2 : -0.1;  // Considering the impact of gender on churn
    let geographyImpact = (Geography === 'Germany') ? 0.3 : ((Geography === 'Spain') ? -0.25 : 0.0);  // Considering the impact of geography on churn
    let surnameLengthImpact = (Surname.length <= 5) ? -0.15 : 0.1;  // Considering the impact of surname length on churn

    // Calculating the linear combination with updated coefficients and variable impacts
    let linearCombination = (
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
        coefficients.SurnameImpact * surnameLengthImpact
    );

    // Calculating the probability of churning based on the logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
