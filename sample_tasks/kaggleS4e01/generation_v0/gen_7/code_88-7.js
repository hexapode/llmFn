/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15662494, Surname=Hao, CreditScore=599, Geography=France, Gender=Female, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=131736.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // Coefficients and impacts remain similar
    };

    // Intermediate calculations based on input variables
    let surnameLength = Surname.length;
    let surnameImpact = surnameLength > 5 ? 1.63 : -2.39;

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00);
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32 + NumOfProducts * 1.05;

    let customParameter = (Age * 1.08) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.51;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.24;
    }

    // Adding a new parameter based on input
    let ageCreditScoreRatio = Age / CreditScore;

    let linearCombination = (
        // Similar linear combination with addition of ageCreditScoreRatio
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
