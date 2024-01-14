/** // 0.6172463725276863 //**/
/**
I try on the following input and it returned 0.9355147251206927" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15665088, Surname=Chinedum, CreditScore=599, Geography=Germany, Gender=Male, Age=38.0, Tenure=9, Balance=135157.05, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=156476.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.004,
        Age: -0.020,
        Tenure: -0.070,
        Balance: 0.0000005,
        NumOfProducts: -0.600,
        HasCrCard: -0.350,
        IsActiveMember: -2.000, // Updated impact of IsActiveMember
        EstimatedSalary: 0.00001,
        GeographyImpact: 0.20,  // Updated impact of Geography
        GenderImpact: -0.210,
        SurnameImpact: 0.10,
        // Other coefficients
    };

    // Updated impact calculation for IsActiveMember and HasCrCard
    const additionalVariable = NumOfProducts * 1.04 + (HasCrCard === 1.0 ? -3.50 : 0.0) + (IsActiveMember === 1.0 ? -5.00 : 0.0);

    // Updated linear combination using the coefficients and input features
    const linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.00 : 0.0) +  // Impact based on Geography
        coefficients.GenderImpact * (Gender === 'Male' ? 2.33 : -2.34) +
        coefficients.SurnameImpact * (Surname.length > 7 ? 1.00 : 0.00) +  // Impact based on Surname length
        additionalVariable  // Added additionalVariable calculation
        // Other feature impacts
    );

    // Applying sigmoid function
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
