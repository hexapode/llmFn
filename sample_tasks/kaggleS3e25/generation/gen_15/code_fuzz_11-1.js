
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1208.92) {
    if (Bilirubin < 1.34 && Albumin > -3.11) {
      Status_C = 0.88;
      Status_CL = 0.04;
      Status_D = 0.64;
    } else {
      Status_C = 0.06;
      Status_CL = 0.04;
      Status_D = 0.63;
    }
  } else {
    if (Bilirubin < 2.1089 && Albumin > 2.55) {
      Status_C = 0.82;
      Status_CL = 0.02;
      Status_D = 0.19780000000000006;
    } else {
      Status_C = 0.42000000000000004;
      Status_CL = 0.12;
      Status_D = 0.72;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
