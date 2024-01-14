/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15804486, Surname=Brown, CreditScore=653, Geography=Germany, Gender=Male, Age=31.0, Tenure=7, Balance=116822.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=108891.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.20,  
        ExtraParameterImpact: 0.78,  
    };

    // ... (previous code remains unchanged)

    let novelCombination = (Age * NumOfProducts + Balance) / (Math.sqrt(Tenure) + 1.0);
    
    let linearCombination = (
        // ... (previous linearCombination computation)
        coefficients.NewParameterImpact * novelCombination +  // Adding the novel combination to the linear combination
        // ... (other linearCombination terms)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
const result = PredictExited(15804486, 'Brown', 653, 'Germany', 'Male', 31.0, 7, 116822.21, 1, 1.0, 1.0, 108891.2);
console.log(result);  // Output should be close to 0
