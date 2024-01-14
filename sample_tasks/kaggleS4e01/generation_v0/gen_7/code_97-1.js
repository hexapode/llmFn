/** // 0.34386042994662613 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15686917, Surname=Page, CreditScore=633, Geography=Spain, Gender=Female, Age=40.0, Tenure=10, Balance=150507.21, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=84699.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree parameters
    const decisionTree = {
        // Sample decision tree structure
        AgeThreshold: 38,
        BalanceThreshold: 100000,
        NumOfProductsThreshold: 2,
        GeographyThreshold: {
            Germany: {
                IsActiveMemberThreshold: 0.5,
                CreditScoreThreshold: 650
            },
            Spain: {
                IsActiveMemberThreshold: 0.6,
                CreditScoreThreshold: 600
            },
            France: {
                IsActiveMemberThreshold: 0.4,
                CreditScoreThreshold: 670
            }
        }
    };

    let prediction = 0;

    // Decision tree prediction logic
    if (Age <= decisionTree.AgeThreshold) {
        if (Balance <= decisionTree.BalanceThreshold) {
            prediction = 1;
        } else {
            if (NumOfProducts > decisionTree.NumOfProductsThreshold) {
                prediction = 1;
            } else {
                if (Geography === 'Germany' && IsActiveMember <= decisionTree.GeographyThreshold.Germany.IsActiveMemberThreshold && CreditScore <= decisionTree.GeographyThreshold.Germany.CreditScoreThreshold) {
                    prediction = 1;
                } else if (Geography === 'Spain' && IsActiveMember <= decisionTree.GeographyThreshold.Spain.IsActiveMemberThreshold && CreditScore <= decisionTree.GeographyThreshold.Spain.CreditScoreThreshold) {
                    prediction = 1;
                } else if (Geography === 'France' && IsActiveMember <= decisionTree.GeographyThreshold.France.IsActiveMemberThreshold && CreditScore <= decisionTree.GeographyThreshold.France.CreditScoreThreshold) {
                    prediction = 1;
                }
            }
        }
    }

    return prediction;
}

// Sample input
console.log(PredictExited(15686917, 'Page', 633, 'Spain', 'Female', 40.0, 10, 150507.21, 1, 0.0, 1.0, 84699.56)); // Output: 0
