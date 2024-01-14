/** // 0.4982244327345527 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    
    // Extract the numerical part of the CustomerId and use modulo to get a value between 0 and 19
    let idImpact = CustomerId % 20 / 20;

    let creditScoreImpact = CreditScore / 1000;

    let tenureImpact = (10 - Tenure) / 10;

    let balanceImpact = Balance / 100000;

    let ageImpact = (100 - Age) / 100;

    let activeMemberImpact = IsActiveMember ? -0.2 : 0.2;

    let churnProbability = 0.5 + idImpact + creditScoreImpact + tenureImpact + balanceImpact + ageImpact + activeMemberImpact;

    churnProbability = Math.max(0, Math.min(1, churnProbability));

    return churnProbability;
}
