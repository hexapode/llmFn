/** // 0.4982244327345527 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15707674, Surname=Marino, CreditScore=471, Geography=France, Gender=Male, Age=58.0, Tenure=2, Balance=131852.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=81436.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        // ... (coefficients remain unchanged)
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance); 

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit; 

    let balanceToSalaryRatio = Balance / EstimatedSalary; // Calculate balance to estimated salary ratio

    let linearCombination = (
        // ... (linear combination remains unchanged)
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        balanceToSalaryRatio * 0.32 // Include balance to estimated salary ratio impact
    );

    const probability = 0.16 / (202.00 + Math.exp(-linearCombination));

    return probability;
}
