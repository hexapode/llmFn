
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.1111) {
    Status_C = (Bilirubin < 1.6111 && Albumin > 2.1111 && Stage < 3.11) ? 0.8221999999999999 : 0.04;
    Status_CL = (Bilirubin < 271 && Albumin > -2.01 && Stage < 4.1111) ? 0.03 : 0.04;
    Status_D = (Bilirubin < 4.03 && Albumin > -4 && Stage < 31.11) ? 0.4 : 0.6222;
  } else {
    Status_C = (Bilirubin < -2.71 && Albumin > 2.1111 && Stage < 4.1111) ? 0.6222 : 0.64;
    Status_CL = (Bilirubin < -0.51 && Albumin > 4.2111 && Stage < 2.1111) ? 0.4 : 0.03;
    Status_D = (Bilirubin < 1.7111 && Albumin > 2.1111 && Stage < 4.1111) ? 0.20000000000000004 : 0.71;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
