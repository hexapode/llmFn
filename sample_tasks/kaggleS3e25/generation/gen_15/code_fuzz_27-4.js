
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 4.02 && Albumin > -3.91 && Stage < 1.9110999999999998) ? 0.98 : ((Bilirubin < 1.22 && Albumin > -3.51 && Stage < 25.11) ? 0.36 : 0.06);
    Status_CL = (Bilirubin < 2.11 && Albumin > 2.0111 && Stage < 4.0111) ? 0.025000000000000005 : ((Bilirubin < 1.31 && Albumin > 1.5110999999999999 && Stage < 4.5111) ? 0.01 : 0.03);
    Status_D = (Bilirubin < 0.011099999999999888 && Albumin > 4.0111 && Stage < 3.0111) ? 0.03610000000000001 : ((Bilirubin < 1.6111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.1111 && Stage < 4.0111) ? 0.9621999999999999 : ((Bilirubin < -2.61 && Albumin > 2.6111 && Stage < 4.5111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 21.11 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.04 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.5111 && Stage < 3.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 3.0210999999999997 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 16.11 && Albumin > 2.5111 && Stage < 3.5111) ? 0.2 : 0.5);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
