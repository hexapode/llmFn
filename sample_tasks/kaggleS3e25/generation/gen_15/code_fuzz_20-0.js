
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  Status_C = (Bilirubin < 1.9989000000000001 && Albumin > 2.81 && Stage < 4.1089) ? 0.92 : 0.1;
  Status_CL = (Bilirubin < -2.21 && Albumin > -2.01 && Stage < 4.1089) ? 0.01 : 0.02;
  Status_D = (Bilirubin < 9.5 && Albumin > 2.1088999999999998 && Stage < 3.1088999999999998) ? 0.11 : 0.45;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
