/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15576760, Surname=Hsiung, CreditScore=683, Geography=France, Gender=Male, Age=61.0, Tenure=1, Balance=154863.35, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=125818.49.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree parameters and thresholds
    const decisionTreeParams = {
        Node1: {
            condition: CreditScore <= 600,
            churnProbability: 0.8
        },
        Node2: {
            condition: Geography === 'Germany',
            Node3: {
                condition: Age > 50,
                churnProbability: 0.6
            },
            Node4: {
                condition: Balance > 100000,
                Node5: {
                    condition: EstimatedSalary > 120000,
                    churnProbability: 0.3
                },
                Node6: {
                    condition: IsActiveMember === 0,
                    churnProbability: 0.9
                }
            }
        },
        Node7: {
            condition: NumOfProducts === 1,
            Node8: {
                condition: Tenure < 2,
                churnProbability: 0.7
            },
            Node9: {
                condition: HasCrCard === 0,
                churnProbability: 0.5
            }
        }
    };

    // Traverse the decision tree based on input parameters
    let currentNode = decisionTreeParams.Node1;

    if (currentNode.condition) {
        return currentNode.churnProbability; // High churn probability
    } else {
        if (currentNode.Node2.condition) {
            currentNode = currentNode.Node2;
            if (currentNode.Node3.condition) {
                return currentNode.Node3.churnProbability; // Moderate churn probability
            } else if (currentNode.Node4.condition) {
                currentNode = currentNode.Node4;
                if (currentNode.Node5.condition) {
                    return currentNode.Node5.churnProbability; // Low churn probability
                } else if (currentNode.Node6.condition) {
                    return currentNode.Node6.churnProbability; // High churn probability
                }
            }
        } else {
            currentNode = decisionTreeParams.Node7;
            if (currentNode.condition) {
                currentNode = currentNode.Node8;
                if (currentNode.condition) {
                    return currentNode.churnProbability; // Moderate churn probability
                } else {
                    currentNode = decisionTreeParams.Node9;
                    if (currentNode.condition) {
                        return currentNode.churnProbability; // Low churn probability
                    } else {
                        return 0.1; // Low churn probability
                    }
                }
            }
        }
    }
}
