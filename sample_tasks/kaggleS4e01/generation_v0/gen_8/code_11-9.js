/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    // Map the first letter of the surname to a numeric value
    const surnameMultiplier = (surname) => {
        const firstLetter = surname[0].toUpperCase();
        const charCode = firstLetter.charCodeAt(0);
        if (charCode >= 65 && charCode <= 67) return 1; // A, B, C
        else if (charCode >= 68 && charCode <= 70) return 2; // D, E, F
        else if (charCode >= 71 && charCode <= 73) return 3; // G, H, I
        else if (charCode >= 74 && charCode <= 76) return 4; // J, K, L
        else if (charCode >= 77 && charCode <= 79) return 5; // M, N, O
        else if (charCode >= 80 && charCode <= 82) return 6; // P, Q, R
        else if (charCode >= 83 && charCode <= 85) return 7; // S, T, U
        else if (charCode >= 86 && charCode <= 88) return 8; // V, W, X
        else return 9; // Y, Z
    };

    const surnameMultiplierValue = surnameMultiplier(Surname);

    // Add the contribution of the surname to the weighted sum
    weightedSum += surnameMultiplierValue;

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
