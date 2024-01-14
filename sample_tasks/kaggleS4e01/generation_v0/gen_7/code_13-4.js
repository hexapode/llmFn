/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients remain unchanged)
        SurnameImpact: 0.00,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (Surname === 'Chukwuemeka') {
        surnameImpact = -0.95;
    } else if (Surname === 'Fokine') {
        surnameImpact = 0.74;
    } else {
        if (surnameLength <= 7) {
            surnameImpact = -0.09;
        } else {
            surnameImpact = 1.27;
        }
    }
    
    // ... (rest of the function remains unchanged)
}
