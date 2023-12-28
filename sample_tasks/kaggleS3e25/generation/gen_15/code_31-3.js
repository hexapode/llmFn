
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var factor = (N_Days < 1000) ? 1.2 : 0.8;
  
  if (Age > 10000 && Cholesterol > 500 && Alk_Phos > 2000) {
    Status_C = 0.85 * factor;
    Status_CL = 0.1 * factor;
    Status_D = 0.05 * factor;
  } else {
    Status_C = (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.6 * factor: 0.2 * factor;
    Status_CL = (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.3 * factor: 0.4 * factor;
    Status_D = (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.1 * factor: 0.4 * factor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
