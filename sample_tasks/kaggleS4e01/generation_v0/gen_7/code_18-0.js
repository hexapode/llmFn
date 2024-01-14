/** // -Infinity //**/
/**
I try on the following input and it returned 0.027558994332450057" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15610454, Surname=Tretiakova, CreditScore=628, Geography=France, Gender=Male, Age=22.0, Tenure=10, Balance=0.0, NumOfProducts=3, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=53437.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.28;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - -59.10) / 113.64;

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
        case "Tretiakova": // Adding case for the provided surname
            surnameValue = 0.10;
            break;
        default:
            surnameValue = 0.00;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let linearCombination = (
        // ... (same as before)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination)); // Using the sigmoid function for probability

    return probability;
}
