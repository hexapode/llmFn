
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageFactor = Age / 10000;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.95 - ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.6 - ageFactor : 0.2 - ageFactor);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 + ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.3 + ageFactor : 0.4 + ageFactor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 + ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.1 + ageFactor : 0.4 + ageFactor);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.85 - ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 - ageFactor : 0.1 - ageFactor);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.1 + ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 + ageFactor : 0.3 + ageFactor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.05 + ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.2 + ageFactor : 0.6 + ageFactor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
