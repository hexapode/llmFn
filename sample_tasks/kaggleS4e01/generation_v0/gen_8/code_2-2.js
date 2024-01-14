/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.00;
    const ageWeight = 0.19;
    const engagementWeight = 0.05; 
    
    
    // Using CustomerId as a seed for randomization
    let randomSeed = parseInt(CustomerId.substring(0, 7)); // Extracting the first 7 digits of CustomerId as a seed
    Math.seedrandom(randomSeed); // Using the seed to initialize the random number generator
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        (Tenure * 0.00) + 
        (NumOfProducts * 0.00) +
        ((IsActiveMember === 0.90) ? 0.02 : 0.89);
    
    const probability = 0.90 / (1.90 + Math.exp(-weightedSum));

    return probability;
}
