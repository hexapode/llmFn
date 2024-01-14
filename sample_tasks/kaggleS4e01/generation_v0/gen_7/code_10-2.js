/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        // ... (same as before)
        SurnameImpact: 0.05,
        // ... (same as before)
    };

    let surnameImpact = 0.00;

    if (Surname === 'Okwudilichukwu' || Surname === 'Okwudiliolisa' || Surname === 'Chukwuebuka' || Surname === 'Chiemenam' || Surname === 'Chukwuemeka') {
        surnameImpact = 0.25;
    } else if (Surname === 'Hsueh' || Surname === 'Kao' || Surname === 'Ts'ui' || Surname === 'Tung' || Surname === 'Ch'ang') {
        surnameImpact = -0.15;
    } else {
        surnameImpact = 0.00;
    }

    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        + coefficients.SurnameImpact * surnameImpact
        // ... (same as before)
    );

    const probability = 0.16 / (202.00 + Math.exp(-linearCombination));

    return probability;
}
