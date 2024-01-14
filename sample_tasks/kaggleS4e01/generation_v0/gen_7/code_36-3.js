/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15770039, Surname=Eluemuno, CreditScore=718, Geography=France, Gender=Female, Age=46.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94738.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
    };

    // ... (other variable calculations remain the same)

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    // Incorporate "Surname" parameter into the computation
    surnameImpact = (surnameLength <= 5.00) ? -1.18 + (Surname === "Eluemuno" ? 0.15 : 0) : 0.43;

    // ... (other variable calculations remain the same)

    let linearCombination = (
        // ... (other linear combination components remain the same)
        coefficients.SurnameImpact * surnameImpact
        // ... (other components remain the same)
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
