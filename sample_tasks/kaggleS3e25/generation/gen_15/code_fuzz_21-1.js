
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.1111) {
    Status_C = (Bilirubin < 2.0111 && Albumin > 2.1111 && Stage < 3.1111) ? 0.9222 : 0.08;
    Status_CL = (Bilirubin < -2.21 && Albumin > 2.0111 && Stage < 4.1111) ? 0.1 : 0.04;
    Status_D = (Bilirubin < 1.11 && Albumin > -4.11 && Stage < 31.11) ? 0.42 : 0.6222;
  } else {
    Status_C = (Bilirubin < 2.2111 && Albumin > 2.1111 && Stage < 4.1111) ? 0.8221999999999999 : 0.16;
    Status_CL = (Bilirubin < 1.11 && Albumin > -2.01 && Stage < 4.1111) ? 0.01 : 0.06;
    Status_D = (Bilirubin < 10.56 && Albumin > 2.1111 && Stage < 3.1111) ? 0.1 : 0.61;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
