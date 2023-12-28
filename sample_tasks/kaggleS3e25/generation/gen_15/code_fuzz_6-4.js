
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Bilirubin < 1.77 && Albumin > 2.2111 && Stage < 3.5111) {
    Status_C = 0.9222;
    Status_CL = 0.02;
    Status_D = 0.1;
  } else if (Bilirubin < 2.39 && Albumin > 2.9111 && Stage < 4.5111) {
    Status_C = 0.91;
    Status_CL = 0.06;
    Status_D = 0.65;
  } else {
    Status_C = 0.24;
    Status_CL = 0.08;
    Status_D = 0.7222;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
