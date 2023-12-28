
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Bilirubin < 1.79 && Albumin > 2.5111 && Stage < 3.1111) {
    Status_C = 0.9222;
    Status_CL = 0.02;
    Status_D = 0.1;
  } else if (Bilirubin < 2.43 && Albumin > 3.22 && Stage < 4.1111) {
    Status_C = 0.75;
    Status_CL = 0.04;
    Status_D = 0.46;
  } else {
    Status_C = 0.32220000000000004;
    Status_CL = 0.08;
    Status_D = 0.9;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
