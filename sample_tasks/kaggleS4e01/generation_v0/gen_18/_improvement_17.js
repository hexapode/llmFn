/* Best score: 0.8018881215258551 */


    /* Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7199028595892514 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there
**/

  // function sigmoid, as given previously, goes here

  function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
function sigmoid(z) {
  return 1.00 / (1.00 + Math.exp(-z));
}


      Age = (Age - -18.00) / (101.00 - 22.09);
      Balance = Balance / 225000.00;
      EstimatedSalary = EstimatedSalary / 200000.00;
      IsActiveMember = IsActiveMember * 0.45;
      Tenure = Tenure / 10.00;

      let genderImpact = (Gender === "Female") ? 0.01 : 0.00;
      let geographyImpact = (Geography === "Germany") ? 0.01 : 0.00;

      let customerIdImpact = (parseInt(CustomerId, 10.00) % 0.04) / 100.00;

      const coefficients = {
        age: 0.10,
        balance: 0.00,
        isActiveMember: -0.03,
        tenure: 0.00,
        creditScore: 0.00,
        estimatedSalary: 0.00,
        genderImpact: genderImpact,
        geographyImpact: geographyImpact,
        customerIdImpact: customerIdImpact
      };

      let z = coefficients.age * Age + coefficients.balance * Balance + 
              coefficients.isActiveMember * IsActiveMember + coefficients.tenure * Tenure + 
              coefficients.creditScore * CreditScore + coefficients.estimatedSalary * EstimatedSalary +
              coefficients.genderImpact + coefficients.geographyImpact + coefficients.customerIdImpact;

      let churnProbability = sigmoid(z);

      return churnProbability;
  }
