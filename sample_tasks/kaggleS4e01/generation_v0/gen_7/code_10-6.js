/** // 0.6196645911293871 //**/
/**
I try on the following input and it returned 0.004432907104944634" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15697318, Surname=Mancini, CreditScore=682, Geography=France, Gender=Female, Age=49.0, Tenure=2, Balance=132378.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=127932.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // Updated coefficients based on additional input parameters and their potential influence
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.004,
        Age: 0.05,
        Tenure: 0.02,
        Balance: 0.00004,
        NumOfProducts: -0.05,
        HasCrCard: -0.03,
        IsActiveMember: -0.05,
        EstimatedSalary: 0.00003,
        GeographyImpact: 0.25, 
        GenderImpact: -0.15, 
        SurnameImpact: 0.07,
        FavourableGenderImpact: 0.20,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.15; 
    } else {
        surnameImpact = 0.35;
    }

    // New parameter that may influence churn prediction
    let creditScoreImpact = (700 - CreditScore) * 0.001;

    // Linear combination of input parameters and their coefficients
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.10 : -0.05) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 0.10 : -0.10) +
        coefficients.SurnameImpact * surnameImpact +
        creditScoreImpact
    );

    // Sigmoid function to calculate the probability of churning
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
