/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const surnameFirstLetter = Surname.charAt(0).toLowerCase();
    const surnameWeight = {
        'a': 0.05, 'b': 0.1, 'c': -0.08, 'd': -0.03, 'e': 0.07, 'f': 0.02, 'g': -0.05, 'h': 0.03, 'i': 0.06, 'j': -0.1,
        'k': 0.09, 'l': 0.01, 'm': 0.04, 'n': -0.04, 'o': 0.08, 'p': -0.07, 'q': -0.2, 'r': 0.05, 's': 0.02, 't': -0.06,
        'u': 0.1, 'v': -0.02, 'w': 0.04, 'x': -0.07, 'y': 0.09, 'z': 0.01
    };

    const surnameImpact = surnameWeight[surnameFirstLetter] || 0;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other calculations)
        (surnameImpact) +
        // ... (other calculations)

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
