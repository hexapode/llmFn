/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15592645, Surname=Nnanna, CreditScore=736, Geography=Germany, Gender=Female, Age=28.0, Tenure=4, Balance=153537.57, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=25650.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        //... coefficients from previous implementation
    };

    let surnameLength = Surname.length;
    let surnameImpact = surnameLength < 5 ? -2.31 : 1.37;

    let newParameter = (Age * Tenure + (HasCrCard === 1 ? 1000.00 : 407.13)) / (NumOfProducts + Balance);
  
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
  
    let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43 + NumOfProducts * 1.05;

    let surnameValue = Surname === "Ts'ui" ? -0.22 : 0.33;

    let customParameter = (Age * 0.98) / (EstimatedSalary * 0.07);

    let geographyImpact = Geography === 'Germany' ? 2.40 : (Geography === 'Spain' ? -2.03 : -2.22);

    let unusedParameter = 110.01;
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let newVariable = 0.20; // Additional variable added
    
    let linearCombination = (
        // ... linearCombination calculation from previous implementation
        + coefficients.ExtraParameterImpact * newVariable
        + coefficients.ExtraParameterImpact * (Balance * 0.00)
        + coefficients.ExtraParameterImpact * (NumOfProducts * 0.15)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
