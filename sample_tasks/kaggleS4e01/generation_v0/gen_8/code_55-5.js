/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)
    
    const surnameLengthImpact = (Surname.length * 0.03);
    let surnameImpact = 0;
    
    // Check for specific characters or combinations in the surname
    if (Surname.includes("Chukwu") || Surname.includes("Okwudi") || Surname.includes("Ts'") || Surname.includes("Ts'ai")) {
        surnameImpact = 0.05;  // Positive impact if specific combinations are present
    } else if (Surname.includes("Kao") || Surname.includes("Ch'")) {
        surnameImpact = -0.03;  // Negative impact if specific combinations are present
    }

    // Updated weighted sum with Surname impact
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        // ... (other parameter contributions remain unchanged)
        surnameLengthImpact +
        surnameImpact +
        // ... (rest of the computation remains unchanged)

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15663888.00, "Tuan", 681.00, "France", "Male", 37.00, 3.00, 0.00, 2.00, 1.00, 0.00, 104769.96);
console.log(result);
