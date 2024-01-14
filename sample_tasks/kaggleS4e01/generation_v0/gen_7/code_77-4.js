/** // 0.5111522317361333 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15694566, Surname=Roberts, CreditScore=602, Geography=France, Gender=Female, Age=42.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=169921.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    // Checking if the last character of the surname is 's'
    let lastCharacter = Surname.charAt(Surname.length - 1);
    if (lastCharacter === 's') {
        surnameImpact = -0.71;
    } else {
        surnameImpact = 0.42;
    }

    // Introducing a new parameter based on Age and Tenure
    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.13)) / (NumOfProducts + Balance);

    // Introducing a new variable based on the last digit of CustomerId
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;

    // Calculating a new variable based on the age and credit score
    let ageCreditScoreImpact = Age * CreditScore * 0.0017;
    
    // Introducing a new variable based on the credit score
    let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43;
    additionalVariable += NumOfProducts * 1.05;

    // Calculating a new parameter based on the number of products and whether the customer is an active member
    let activeMemberProductParameter = NumOfProducts * (IsActiveMember === 1.00 ? 2.78 : 1.94);

    let linearCombination = (
        // ... (same as previous function) 
        + surnameImpact + newParameter + customerIdImpact + ageCreditScoreImpact 
        + additionalVariable + activeMemberProductParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));
    return probability;
}
