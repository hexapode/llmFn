/** // 0.6964583474170927 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let score = 0;
    
    // Geography impact
    if (Geography === 'Germany') {
        score += 0.5;
    } else if (Geography === 'Spain') {
        score -= 0.1;    
    } else {
        score -= 0.1;
    }

    // Gender impact
    if (Gender === 'Female') {
        score += 0.4;
    } else {
        score -= 0.1;
    }

    // Age impact
    score += Age * 0.05;

    // Balance impact
    score += Balance * 0.00005;

    // Tenure impact
    score += Tenure * (-0.01);

    // IsActiveMember impact
    score += IsActiveMember * (-0.8);

    // Number of Products impact
    if (NumOfProducts < 3) {
        score -= 4;
    } else {
        score += 1.5;
    }

    // Has Credit Card impact
    score -= HasCrCard * 0.2;

    // Estimated Salary impact
    score += EstimatedSalary * 0.00001;

    // Surname impact
    if (Surname === 'Okwudilichukwu') {
        score += 0.2;
    } else if (Surname === 'Genovese') {
        score += 0.2;
    } else if (Surname === 'Macdonald') {
        score += 0.2;
    }
    
    // Calculate probability
    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}
