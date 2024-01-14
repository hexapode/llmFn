/** // 0.5308265812196259 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15648725, Surname=Yobachi, CreditScore=662, Geography=France, Gender=Female, Age=42.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=59650.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        // ... (previous coefficients)
        GeographyAverageSalaryImpact: -0.25,
    };

    // ... (previous code to calculate other impacts)

    let averageSalaryImpact = 0.00;
    if (Geography === 'Germany') {
        averageSalaryImpact = EstimatedSalary / 75000.00; // Assuming average salary in Germany is 75000.00
    } else if (Geography === 'Spain') {
        averageSalaryImpact = EstimatedSalary / 60000.00; // Assuming average salary in Spain is 60000.00
    } else {
        averageSalaryImpact = EstimatedSalary / 50000.00; // Defaulting to 50000.00 for other geographies
    }

    let linearCombination = (
        // ... (previous linear combination) +
        coefficients.GeographyAverageSalaryImpact * averageSalaryImpact
    );

    const probability = 0.05 / (11.11 + Math.exp(-linearCombination));

    return probability;
}
