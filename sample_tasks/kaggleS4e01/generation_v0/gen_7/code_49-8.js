/** // 0.4702144868327676 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15652981, Surname=Onodugoadiegbemma, CreditScore=717, Geography=France, Gender=Male, Age=60.0, Tenure=8, Balance=69413.44, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131281.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    // Let's assume we've trained a decision tree model and extracted the rules

    // Example rules
    const rule1 = (CreditScore > 650 && Age > 50 && Balance > 50000) ? 0.1 : 0.3;
    const rule2 = (Geography === 'France' && Gender === 'Male' && NumOfProducts === 2) ? 0.2 : 0.4;
    const rule3 = (EstimatedSalary < 100000 && IsActiveMember === 0) ? 0.5 : 0.7;

    // Aggregate the rules
    const probability = (rule1 + rule2 + rule3) / 3;

    return probability;
}
