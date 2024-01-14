/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15752097, Surname=Frewin, CreditScore=722, Geography=France, Gender=Male, Age=29.0, Tenure=3, Balance=146853.11, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=166678.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous implementation)
    };

    let additionalValue = (CreditScore / 722) * (NumOfProducts / 1) * (Balance / 146853.11) * (Geography === 'France' ? 1.2 : 0.8) * (Gender === 'Male' ? 1.1 : 0.9);

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        // ... (rest of the coefficients)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination + additionalValue));

    return probability;
}
