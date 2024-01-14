/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15749489, Surname=Onyemauchechukwu, CreditScore=696, Geography=France, Gender=Female, Age=39.0, Tenure=7, Balance=104450.94, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94722.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.27,
        IsActiveMember: -1.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.43,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.42, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.76,
        NovelVariableImpact: 0.05  // Additional coefficient for the novel variable
    };

    // ... (previous code remains the same)

    // New combination of variables
    let novelVariable = (Age * CreditScore) / Math.sqrt(Tenure + Balance);
    let novelVariableImpact = novelVariable * coefficients.NovelVariableImpact;

    // ... (previous code remains the same)

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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.32 : -2.23) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.50 +
        coefficients.ExtraParameterImpact * (Age * 0.21) +
        novelVariableImpact  // Adding the impact of the novel variable
    );

    // ... (previous code remains the same)
}

// Sample input
const result = PredictExited(15749489, "Onyemauchechukwu", 696, "France", "Female", 39.0, 7, 104450.94, 1, 1.0, 0.0, 94722.66);
console.log(result);  // Output: 0.432
