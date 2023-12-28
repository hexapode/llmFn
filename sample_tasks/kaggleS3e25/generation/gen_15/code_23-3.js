
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.9 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.5 : 0.1);
    Status_CL = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.1 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.0 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.4 : 0.6);
  } else {
    Status_C = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.8 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.3 : 0.05);
    Status_CL = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.1 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.4 : 0.4);
    Status_D = (Bilirubin < 1.2 && Albumin > 3.5 && Stage < 2.0) ? 0.1 : ((Bilirubin < 1.9 && Albumin > 3.0 && Stage < 2.5) ? 0.5 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}