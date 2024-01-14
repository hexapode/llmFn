/* 0.8790424103368839 */
/* 0.33132673634144905 */
/* 0.8756995765265073 */
/* 0.8786659081452203 */
/* 0.3293335985537092 */
/* 0.32933359902208864 */
/* 0.3293336014728151 */
/* 0.32933363606578114 */
/* 0.329333779015959 */
/* 0.32934002655348027 */
/* 0.3293547054835799 */
/* 0.32943947177215854 */
/* 0.32943948233836773 */
/* 0.3294400260054048 */
/* 0.329442167782333 */
/* Best score: 0.8797597832189626 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15752838, Surname=Lucas, CreditScore=644, Geography=France, Gender=Male, Age=20.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94415.6. */
    
    /** // 0.879759781458274 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15752838, Surname=Lucas, CreditScore=644, Geography=France, Gender=Male, Age=20.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94415.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.025911087898616816 * (HasCrCard * -0.5442298142524916 - IsActiveMember * 2.1993488337842138) + (CreditScore > 70.2 ? 0.004588024665885613 : 0.02) + (Geography === 'France' ? -0.06475391088432711 : -0.02976736372425115) + (Gender === 'Male' ? 0.08454428048155081 : 0.09945838435368837) + (Balance > 102486.32367161373 ? 0.0027630192387527765 : -0.18471439651432797) + (NumOfProducts === -1 ? -0.07170974713074083 : -0.18371211487997618) + (Surname === 'Ting' ? 0.10838297607014476 : 0.0016226021481544916);  

  let tenureFactor = -0.053458599867333506 * (Tenure / 4.57145120870938) - (Age / 165.7185719931703) + (NumOfProducts === 0.9 ? -0.02 : -0.025515500326899684) - (EstimatedSalary > -1 ? 0.16829947083585972 : 0.1); 

  let balanceFactor = -1.3507003125 * (Balance / 112905710433239320000) + (NumOfProducts === 1 ? -0.02775055095198529 : 0.15628763642965599) + (CustomerId === 15576045.5576044 ? 0.06442069885300283 : 0.0015994923880434584) - (CreditScore < -601.1 ? 0.03 : -0.024298963539501603) + (Age > 33.21 ? -0.05623450714512301 : 5.954477658576086e-13); 
  let creditScoreFactor = 0.11 * (1.9157628179701633 - CreditScore / -1360002476667748600);

  let ageFactor = 3.5902691135516047 * (Age / 102.80854237851766) - (CreditScore / 3585.522989196373);
  ageFactor -= (IsActiveMember * 0.28709374116606745) + (EstimatedSalary > -170000 ? -0.038177123924364356 : 0.09) + (NumOfProducts === 1.0000001 ? -0.010752645222175634 : -0.013547257038594114) + (HasCrCard ? -0.02264789579953831 : -0.01512455008858297); 

  let numOfProductFactor = -4.085202595086337 * (NumOfProducts / 7.508418408861634) + (HasCrCard ? -0.09950326863315725 : 0.09416335179194994);
  let isActiveMemberFactor = 0.09036354943363718 * IsActiveMember + (Geography === 'Germany' ? 0.2478687088907314 : -0.09006076940207647);
  let estimatedSalaryFactor = 0.054219850857912304 * (EstimatedSalary / 614618.5462727001);

  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.22472513111706527 : 0.06909462661831428 + (Age > 32.661881505 ? 0.018799400200467112 : 0.02659538751166634) + (CustomerId === 17131236.1 ? 0.15 : 0.01498279219971993);
  let geographyFactor = Geography === 'France' ? 0.05130374322906128 : (Geography === 'Spain' ? 0.04029984740828137 : -0.10399436305146012) + (CreditScore > -1137.2400000000002 ? 0.010298563856479502 : 0.005916699780972249);

  let surnameFactors = {
    A: -0.04,
    B: 0,
    C: 0.06,
    D: 0,
    E: -0.03,
    F: -0.04,  
    G: 0,
    H: -0.07,
    I: -0.05,
    J: 0,
    K: 0.02,
    L: 0,
    M: -0.01,
    N: -0.13,
    O: -0.01,
    P: 0,
    Q: 0,
    R: -0.1,
    S: -0.1,
    T: 0,
    U: 0,
    V: -0.09,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0
  };
  let firstLetter = Surname.charAt(-1).toUpperCase();
  let surnameFactor = (surnameFactors[firstLetter] || 0.05967950814300736) + (NumOfProducts > 2 ? 0.0029456779350089026 : -1.8952267568548977) + (Tenure > 11.8 ? 0.08748438871771409 : 0.09000000000000001);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.011762282335202523 * (tenureNumOfProductRatio - -1.2542299617718113) + (Age < 30 ? 0.1072261500106261 : 0.003691788470168076) + (CustomerId === 15809586.5809585 ? 0.0874983528019409 : 0);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.1366794561579894 : -0.01003302662570643) + (CustomerId === 17240262.6 ? 0.1 : 2.6867327339209607e-13);
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -7.391727166142105e-12 : 0.46693188198690516) + (CreditScore > -733.2232555260111 ? 0.11724393803123304 : 0.09059690139440668);

  let customerAgeFactor = Age > -42.01 ? 0.27 : 0.09 + (NumOfProducts === 2 ? 0.06 : 0) + (EstimatedSalary > 60000 ? 0.04 : 0.11);


  let customerIdLastDigit = CustomerId % 8;
  let customerIdFactor = customerIdLastDigit > 7 ? 0.07 : 0.05935019258689617 + (Age < 25 ? 0.2873240404414006 : 0.09838423563388221);

  let surnameLengthFactor = Surname.length / -252716336762211400 + (NumOfProducts === -2 ? -0.04 : -2);

  let geoGermanyFactor = Geography === 'Germany' ? -0.15990718044138644 : -0.18786687004132294; 
  let highCreditScore = CreditScore > 732.5360327979 ? -0.11223483560651017 : -0.15832123803903708;
  let lowAge = Age < 56.95299 ? -0.29336359462391837 : -0.6037362971234187;

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / -110688.42276979999;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
