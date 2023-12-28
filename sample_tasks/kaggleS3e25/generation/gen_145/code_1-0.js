
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var AgeInt = parseInt(Age);
  var BilirubinFloat = parseFloat(Bilirubin);
  var Alk_PhosFloat = parseFloat(Alk_Phos);
  var SGOTFloat = parseFloat(SGOT);
  var AlbuminFloat = parseFloat(Albumin);
  var PlateletsFloat = parseFloat(Platelets);
  
  var novelCalculation = (AgeInt + BilirubinFloat) / (Alk_PhosFloat * SGOTFloat);

  var Status_C = 0;
  var Status_CL = 0;
  var Status_D = 0;
  // perform calculations and assign probabilities to Status_C, Status_CL, and Status_D using novelCalculation
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
