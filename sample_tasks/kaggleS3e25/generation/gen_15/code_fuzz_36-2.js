
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  
  if (N_Days < 1099.02) {
    Status_C = (Bilirubin < 2.42 && Albumin > 2.1088999999999998 && Stage < 3.1088999999999998) ? 0.9199999999999999 : 0.06;
    Status_CL = (Bilirubin < -2.21 && Albumin > 2.0088999999999997 && Stage < 4.1089) ? 0.01 : 0.04;
    Status_D = (Bilirubin < 1.09 && Albumin > 4.11 && Stage < 3.1088999999999998) ? 0.20890000000000003 : 0.52;
  } else {
    Status_C = (Bilirubin < 1.1 && Albumin > 2.1088999999999998 && Stage < 4.1089) ? 0.72 : 0.42000000000000004;
    Status_CL = (Bilirubin < 2.2089000000000003 && Albumin > -2.01 && Stage < 4.1089) ? 0.01 : 0.12;
    Status_D = (Bilirubin < 2.0989000000000004 && Albumin > 2.1088999999999998 && Stage < 4.1089) ? 0.08 : 0.72;
  }
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
