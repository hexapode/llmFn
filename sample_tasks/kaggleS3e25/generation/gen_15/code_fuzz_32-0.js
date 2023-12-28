
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3672", Drug="Placebo", Age="13486", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="460.0", Albumin="3.8", Copper="38.0", Alk_Phos="1692.0", SGOT="170.5", Tryglicerides="118.0", Platelets="233.0", Prothrombin="9.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var novelVariable = Math.sqrt(parseFloat(Copper) * parseFloat(Prothrombin) / (parseFloat(Alk_Phos) + parseFloat(SGOT)));

  if (N_Days < -999.11) {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && novelVariable > 10.111099999999999) ? 1.0611 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && novelVariable > 5.1110999999999995) ? 0.7111 : 0.21000000000000005);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && novelVariable > 10.111099999999999) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && novelVariable > 5.1110999999999995) ? 0.4111 : 0.4);
    Status_D = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && novelVariable > 10.111099999999999) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && novelVariable > 5.1110999999999995) ? 0.2111 : 0.6222);
  } else {
    Status_C = (Bilirubin < 0.91 && Albumin > -3.61 && Stage < 2.6111 && novelVariable > -10.11) ? 0.9611 : ((Bilirubin < -1.61 && Albumin > -3.11 && Stage < 3.1111 && novelVariable > -5.11) ? 0.5111 : 0.32220000000000004);
    Status_CL = (Bilirubin < 0.9111 && Albumin > -3.61 && Stage < 2.6111 && novelVariable > -10.11) ? 0.02 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && novelVariable > 5.1110999999999995) ? 0.5111 : 0.03);
    Status_D = (Bilirubin < -0.91 && Albumin > -3.61 && Stage < 2.6111 && novelVariable > -10.11) ? 0.02 : ((Bilirubin < 1.6111 && Albumin > -3.11 && Stage < 3.1111 && novelVariable > -5.11) ? 0.03 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
