/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15635277, Surname=Yobanna, CreditScore=662, Geography=France, Gender=Male, Age=30.0, Tenure=8, Balance=105355.98, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=48233.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.28;
    }

    let surnameValue = 0.00;
    switch (Surname) {
        case "Okwudilichukwu":
            surnameValue = 0.06;
            break;
        case "Okwudiliolisa":
            surnameValue = 0.20;
            break;
        case "Hsueh":
            surnameValue = 0.05;
            break;
        
        default:
            surnameValue = 0.00;
            break;
    }

    // ... (additional code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.SurnameImpact * surnameImpact + // Adding the impact of surname length to the linear combination
        surnameValue // Adding the impact of specific surnames to the linear combination
        // ... (additional code remains the same)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
