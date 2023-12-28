
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 2000) {
    Status_C = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.9 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.6 : 0.3);
    Status_CL = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.05 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.3 : 0.5);
    Status_D = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.05 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.1 : 0.2);
  } else {
    Status_C = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.8 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.5 : 0.2);
    Status_CL = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.1 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.4 : 0.4);
    Status_D = (Bilirubin < 1.0 && Albumin > 3.0 && Prothrombin > 50) ? 0.1 : ((Bilirubin < 2.0 && Albumin > 2.5 && Prothrombin > 30) ? 0.3 : 0.4);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
