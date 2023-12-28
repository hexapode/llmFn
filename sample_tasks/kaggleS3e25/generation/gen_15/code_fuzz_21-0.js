
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.95 : 0.05;
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111) ? 0.07 : 0.03;
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 25.11) ? 0.25 : 0.5222;
  } else {
    Status_C = (Bilirubin < 0.96 && Albumin > 2.5111 && Stage < 35.11) ? 0.95 : 0.44;
    Status_CL = (Bilirubin < 1.9111000000000002 && Albumin > -2.51 && Stage < 35.11) ? 0.02 : 0.08;
    Status_D = (Bilirubin < 1.81 && Albumin > 2.6111 && Stage < 3.5111) ? 0.07220000000000001 : 0.5;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
