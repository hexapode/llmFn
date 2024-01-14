/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15572038, Surname=Tien, CreditScore=706, Geography=France, Gender=Female, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=933.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    // Interaction effect of Age and Balance
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00) * (CreditScore / 1000.00);

    // Impact of Geography
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.60;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.24;
    }

    // Impact of Gender
    let genderImpact = (Gender === 'Male' ? 2.68 : -2.47);

    // Impact of Surname length
    let surnameLengthImpact = Surname.length <= 5 ? -2.39 : 1.61;

    // Linear combination calculation remains the same

    const probability = 1.00 / (1010.10 + Math.exp(-linearCombination));

    return probability;
}
