
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.95 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.6 : 0.2);
    Status_CL = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.025 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.3 : 0.4);
    Status_D = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.025 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.1 : 0.4);
  } else {
    Status_C = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.85 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.4 : 0.1);
    Status_CL = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.1 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 1 && Albumin > 3 && Stage < 3) ? 0.05 : ((Bilirubin < 2 && Albumin > 2.5 && Stage < 4) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}