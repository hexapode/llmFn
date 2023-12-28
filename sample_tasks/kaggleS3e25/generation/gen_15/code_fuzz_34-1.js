
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 0.011099999999999888 && Albumin > 4.0111 && Stage < 3.0111) ? 0.9611 : ((Bilirubin < 2.22 && Albumin > 2.5111 && Stage < 3.0111) ? 0.6222 : 0.05);
    Status_CL = (Bilirubin < -2.11 && Albumin > 2.0111 && Stage < 4.0111) ? 0.035 : ((Bilirubin < -3.11 && Albumin > 1.5110999999999999 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.011099999999999888 && Albumin > 4.0111 && Stage < 3.0111) ? 0.03610000000000001 : ((Bilirubin < 1.0110999999999999 && Albumin > -3.51 && Stage < 30.11) ? 0.21000000000000002 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.1111 && Stage < 4.0111) ? 0.95 : ((Bilirubin < 15.55 && Albumin > -2.61 && Stage < 2.01) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 10.56 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.04 : ((Bilirubin < 2.0111 && Albumin > 3.5111 && Stage < 4.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 1.1111 && Albumin > 2.0111 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 9.56 && Albumin > 3.4011 && Stage < 4.0111) ? 0.31000000000000005 : 0.5222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
