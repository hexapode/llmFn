/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15791050, Surname=Toscani, CreditScore=564, Geography=France, Gender=Male, Age=32.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=91094.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        NovelVariableImpact: 0.05, // New coefficient for the novel combination of variables
    };

    // ... (previous calculation steps)

    let novelCombination = (Age * NumOfProducts * Balance) - (Math.sqrt(HasCrCard) * (Tenure + 1));

    linearCombination += coefficients.NovelVariableImpact * novelCombination;

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
