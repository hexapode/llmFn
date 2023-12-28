
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1210.01) {
    Status_C = (Bilirubin < 1.34 && Albumin > -3.91 ) ? 0.9222 : 0.05;
    Status_CL = (Bilirubin < 10.56 && Albumin > 2.0111 ) ? 0.05 : 0.01;
    Status_D = (Bilirubin < 0.011099999999999888 && Albumin > 3.0111 ) ? 0.06110000000000001 : 0.6222;
  } else {
    Status_C = (Bilirubin < 1.06 && Albumin > 2.1111 ) ? 0.7999999999999999 : 0.44;
    Status_CL = (Bilirubin < 2.1111 && Albumin > 1.9110999999999998 ) ? 0.02 : 0.08;
    Status_D = (Bilirubin < 1.9110999999999998 && Albumin > 2.9111 ) ? 0.1222 : 0.5;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
