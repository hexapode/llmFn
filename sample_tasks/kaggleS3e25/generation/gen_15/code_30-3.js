
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = ((Bilirubin < 1.2 && Albumin > 3.2) || (Bilirubin < 1.5 && Albumin > 2.8)) ? 0.95 : 0.2;
    Status_CL = ((Bilirubin < 1.2 && Albumin > 3.2) || (Bilirubin < 1.5 && Albumin > 2.8)) ? 0.05 : 0.70;
    Status_D = ((Bilirubin < 1.2 && Albumin > 3.2) || (Bilirubin < 1.5 && Albumin > 2.8)) ? 0.00 : 0.10;
  } else {
    Status_C = ((Bilirubin < 1.0 && Albumin > 3.5) || (Bilirubin < 1.3 && Albumin > 3.0)) ? 0.85 : 0.1;
    Status_CL = ((Bilirubin < 1.0 && Albumin > 3.5) || (Bilirubin < 1.3 && Albumin > 3.0)) ? 0.10 : 0.50;
    Status_D = ((Bilirubin < 1.0 && Albumin > 3.5) || (Bilirubin < 1.3 && Albumin > 3.0)) ? 0.05 : 0.40;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
