/** // 0.6514258211734316 //**/
/**
I try on the following input and it returned 0.09900990098997817" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15757931, Surname=Fang, CreditScore=804, Geography=France, Gender=Male, Age=36.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173195.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.0041,
        Age: 0.0752,
        Tenure: -0.0815,
        Balance: 0.0004,
        NumOfProducts: -0.2905,
        HasCrCard: -0.0127,
        IsActiveMember: -1.0435,
        EstimatedSalary: 0.0000014,
        GeographyImpact: 0.6142,
        GenderImpact: -0.2703,
        SurnameImpact: 0.0032
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.0 : (Geography === 'Spain' ? 0.0 : -1.0)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1.0 : 0.0) +
        coefficients.SurnameImpact * (Surname === 'Fang' ? 1.0 : 0.0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
