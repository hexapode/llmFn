/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15757911, Surname=Yefimova, CreditScore=758, Geography=Spain, Gender=Male, Age=31.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=75578.67.
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

    // ... (same as before)

    let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43;
    
    additionalVariable += NumOfProducts * 1.05;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.22;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 0.98) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.40;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.03;
    } else {
        geographyImpact = -2.22;
    }

    // Introducing a new parameter "AgeBalanceRatio" as an extra factor
    let ageBalanceRatio = Age / (Balance+1);  // Adding 1 to avoid division by zero
    let ageBalanceImpact = (ageBalanceRatio * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 

    // ... (same as before)

    let linearCombination = (
        // ... (same as before) +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        unusedParameterImpact +  
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.01) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15757911, "Yefimova", 758, "Spain", "Male", 31.0, 9, 0.0, 2, 1.0, 0.0, 75578.67));
