
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = (Age / 10000) * 0.2;
  var bilirubinFactor = (Bilirubin / 2) * 0.3;

  if (Age < 15000 && Bilirubin < 2.0) {
    Status_C = 0.8 + ageFactor - bilirubinFactor;
    Status_CL = 0.1 + ageFactor - bilirubinFactor;
    Status_D = 0.1 - ageFactor + bilirubinFactor;
  } else {
    Status_C = 0.3 - ageFactor + bilirubinFactor;
    Status_CL = 0.4 - ageFactor + bilirubinFactor;
    Status_D = 0.3 + ageFactor - bilirubinFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
