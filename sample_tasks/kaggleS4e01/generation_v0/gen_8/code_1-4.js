/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15607874, Surname=Keane, CreditScore=682, Geography=France, Gender=Female, Age=38.0, Tenure=0, Balance=144450.58, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=137276.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    
    const creditScoreWeight = 0.15;
    const ageWeight = 0.18;
    const tenureWeight = 0.1;
    const balanceWeight = 0.12;
    const numOfProductsWeight = 0.08;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.1;
    const estimatedSalaryWeight = 0.1;
    const geographyWeight = {
        'France': 0.05,
        'Germany': 0.07,
        'Spain': 0.08
    };
    const genderWeight = {
        'Male': 0.04,
        'Female': 0.03
    };

    let creditScoreFactor = 1 / (1 + Math.exp(-(CreditScore * creditScoreWeight)));
    let ageFactor = 1 / (1 + Math.exp(-(Age * ageWeight)));
    let tenureFactor = 1 / (1 + Math.exp(-(Tenure * tenureWeight)));
    let balanceFactor = 1 / (1 + Math.exp(-(Balance * balanceWeight)));
    let numOfProductsFactor = 1 / (1 + Math.exp(-(NumOfProducts * numOfProductsWeight)));
    let hasCrCardFactor = 1 / (1 + Math.exp(-(HasCrCard * hasCrCardWeight)));
    let isActiveMemberFactor = 1 / (1 + Math.exp(-(IsActiveMember * isActiveMemberWeight)));
    let estimatedSalaryFactor = 1 / (1 + Math.exp(-(EstimatedSalary * estimatedSalaryWeight));
    let geographyFactor = 1 / (1 + Math.exp(-geographyWeight[Geography]));
    let genderFactor = 1 / (1 + Math.exp(-genderWeight[Gender]));

    let weightedSum = creditScoreFactor + ageFactor + tenureFactor + balanceFactor + numOfProductsFactor + hasCrCardFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
