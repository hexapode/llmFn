/** // 0.4986636238141783 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15666858, Surname=Trevisano, CreditScore=635, Geography=France, Gender=Male, Age=32.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=53511.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.21,  
        ExtraParameterImpact: 0.77,  
        NovelImpact: 0.90,  
    };

    // ... (rest of the code remains unchanged)

    let novelCombination = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44)) * (EstimatedSalary / 10000);

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.NovelImpact * novelCombination
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

let result = PredictExited(15666858, 'Trevisano', 635, 'France', 'Male', 32.0, 6, 0.0, 2, 1.0, 1.0, 53511.28);
console.log(result);  // This should output the predicted probability of churn
