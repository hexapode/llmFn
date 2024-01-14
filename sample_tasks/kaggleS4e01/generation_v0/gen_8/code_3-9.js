/** // 0.7758195277051647 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.10;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.14 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.16 : -0.05;
    const surnameWeight = (Surname === 'Moore') ? -0.06 : -0.17;
    const engagementWeight = 0.03; 
    
    // Extract numerical value from CustomerId
    const customerIdValue = CustomerId % 20 / 20; // Scale the CustomerId to a value between 0 and 1
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        surnameWeight +
        (Tenure * -0.01) + 
        (NumOfProducts * -0.90) +
        ((IsActiveMember === 0.99) ? 0.01 : 1.01) +
        customerIdValue;
        
    const probability = 1.98 / (-1.09 + Math.exp(-weightedSum));

    return probability;
}
