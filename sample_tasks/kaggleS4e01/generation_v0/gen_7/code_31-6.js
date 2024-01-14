/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15662494, Surname=Genovese, CreditScore=590, Geography=France, Gender=Male, Age=34.0, Tenure=6, Balance=139859.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=108543.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    // (same as before)

    let ageBalanceInteraction = Age * Balance;

    let linearCombination = (
        // ... (same as before)
        surnameValue + ageBalanceInteraction + coefficients.CreditScoreImpact * CreditScore 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
