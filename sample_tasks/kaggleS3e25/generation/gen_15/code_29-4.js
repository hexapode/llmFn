
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.9 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.6 : 0.3);
    Status_CL = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.05 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.3 : 0.4);
    Status_D = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.05 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.1 : 0.3);
  } else {
    Status_C = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.8 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.5 : 0.2);
    Status_CL = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.1 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 1.2 && Albumin > 3.2 && Stage < 2.5) ? 0.1 : ((Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) ? 0.3 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
