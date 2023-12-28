
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Bilirubin < 1.9110999999999998 && Albumin > 2.0111 && Stage < 3.0111) {
    Status_C = (N_Days < 9990.11) ? 0.85 : 0.95;
    Status_CL = (N_Days < 2000.02) ? 0.025200000000000004 : 0.01;
    Status_D = (N_Days < 1098.8) ? 0.35 : 0.09;
  } else {
    Status_C = (N_Days < 1208.68) ? 0.1 : 0.69;
    Status_CL = (N_Days < -1000.01) ? 0.02 : 0.06;
    Status_D = (N_Days < -998.91) ? 0.2222 : 0.6222;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
