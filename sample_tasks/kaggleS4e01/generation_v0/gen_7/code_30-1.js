/** // 0.6058045762453629 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15598836, Surname=Mazzanti, CreditScore=715, Geography=France, Gender=Female, Age=39.0, Tenure=10, Balance=97464.39, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=104719.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree model parameters
    const decisionTreeModel = {
        SurnameMazzanti: {
            CreditScoreThreshold: 725,
            AgeThreshold: 35,
            NumOfProductsThreshold: 2,
            IsActiveMember: 1.0,
            NumOfProducts: {
                1: 0.05,
                2: 0.15,
                3: 0.25,
                4: 0.35
            }
        },
        SurnameOther: {
            Geography: {
                France: 0.1,
                Spain: 0.3,
                Germany: 0.5
            }
        }
    };

    let prediction;

    if (Surname === 'Mazzanti') {
        if (CreditScore >= decisionTreeModel.SurnameMazzanti.CreditScoreThreshold && Age > decisionTreeModel.SurnameMazzanti.AgeThreshold) {
            if (NumOfProducts in decisionTreeModel.SurnameMazzanti.NumOfProducts) {
                prediction = decisionTreeModel.SurnameMazzanti.NumOfProducts[NumOfProducts];
            } else {
                prediction = 0.45; // Default value
            }
        } else {
            prediction = 0.25; // Default value
        }
    } else { // SurnameOther
        prediction = decisionTreeModel.SurnameOther.Geography[Geography] || 0.2; // Default value
    }

    return prediction;
}
