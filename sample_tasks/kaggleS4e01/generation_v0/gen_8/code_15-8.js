/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation)

    // Incorporating Surname parameter
    const firstLetter = Surname.charAt(0).toUpperCase();
    let surnameFactor = 0;

    if (firstLetter >= 'A' && firstLetter <= 'G') {
        surnameFactor = 0.1;
    } else if (firstLetter >= 'H' && firstLetter <= 'N') {
        surnameFactor = 0.2;
    } else if (firstLetter >= 'O' && firstLetter <= 'U') {
        surnameFactor = 0.3;
    }

    weightedSum += surnameFactor;

    // ... (remaining calculation)

    return probability;
}
