/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other code ...
    
    let surnameImpact = 0;
    if (Geography === "Asia") {
        if (Surname === "Hsueh" || Surname === "Kao" || Surname === "Ch'ang" || Surname === "Tung") {
            surnameImpact = 0.1;
        }
    } else if (Geography === "Europe") {
        if (Surname === "Genovese" || Surname === "Cattaneo" || Surname === "Rossi" || Surname === "Fokine") {
            surnameImpact = 0.15;
        }
    } else if (Geography === "Africa") {
        if (Surname === "Okwudilichukwu" || Surname === "Okwudiliolisa" || Surname === "Chiemenam" || Surname === "Chukwuebuka" || Surname === "Chukwuemeka") {
            surnameImpact = 0.2;
        }
    } else if (Geography === "North America") {
        if (Surname === "Macdonald" || Surname === "Esquivel" || Surname === "Hargreaves") {
            surnameImpact = 0.1;
        }
    } else if (Geography === "South America") {
        if (Surname === "Manna") {
            surnameImpact = 0.05;
        }
    }

    const linearCombination = weightCustomerId * CustomerId + weightCreditScore * CreditScore + weightAge * Age + weightTenure * Tenure + weightBalance * Balance + weightNumOfProducts * NumOfProducts + weightHasCrCard * HasCrCard + weightIsActiveMember * IsActiveMember + weightEstimatedSalary * EstimatedSalary + surnameImpact;
    
    const probability = 1 / (1 + Math.exp(-linearCombination));
    
    return probability;
}
