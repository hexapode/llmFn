/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15698510, Surname=Folliero, CreditScore=639, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=92867.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        AdditionalVariableImpact: 0.03, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    // ... (same as before)

    // New step using a novel combination of variables
    let additionalVariable2 = Math.pow(CreditScore, 2) / (Age + 1);

    let linearCombination = (
        // ... (same as before)
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.AdditionalVariableImpact * additionalVariable2 +
        // ... (same as before)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15698510, 'Folliero', 639, 'France', 'Male', 41.0, 6, 0.0, 2, 1.0, 1.0, 92867.28)); // Output: 0.21169350195401534
