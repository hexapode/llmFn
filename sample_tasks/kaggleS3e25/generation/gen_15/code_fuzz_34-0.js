
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.1089000000001) {
    Status_C = (Bilirubin < 2.22 && Albumin > 3.02) ? 0.46 : 0.06;
    Status_CL = (Bilirubin < 8.84 && Albumin > 2.0088999999999997) ? 0.05 : 0.02;
    Status_D = (Bilirubin < 100.9 && Albumin > 4.008900000000001) ? 0.4 : 0.82;
  } else {
    Status_C = (Bilirubin < 2.2089000000000003 && Albumin > 2.1088999999999998) ? 0.72 : 0.42000000000000004;
    Status_CL = (Bilirubin < 2.2089000000000003 && Albumin > -2.01) ? 0.02 : 0.12;
    Status_D = (Bilirubin < 2.0989000000000004 && Albumin > 2.1088999999999998) ? 0.29780000000000006 : 0.72;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
