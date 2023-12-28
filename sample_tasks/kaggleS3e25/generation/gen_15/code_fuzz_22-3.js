
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2294", Drug="Placebo", Age="15009", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.6", Cholesterol="235.0", Albumin="3.2", Copper="26.0", Alk_Phos="1758.0", SGOT="106.95", Tryglicerides="67.0", Platelets="228.0", Prothrombin="10.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var newVariable = Cholesterol * (Platelets / SGOT);

  if (N_Days < 999.11) {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 1.0611 : ((Bilirubin < 0.6111 && Albumin > -3.11 && Stage < 4.1111 && newVariable < 15011.1) ? 0.7111 : 0.21000000000000005);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 0.1361 : ((Bilirubin < 26.11 && Albumin > 2.0111 && Stage < 4.1111 && newVariable < 150.1111) ? 0.03 : 0.04);
    Status_D = (Bilirubin < 0.9111 && Albumin > -3.61 && Stage < 2.6111 && newVariable < 10011.1) ? 0.1361 : ((Bilirubin < 0.6111 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 15011.1) ? 0.2111 : 0.6222);
  } else {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 3.6111 && newVariable < 1001.11) ? 0.9722 : ((Bilirubin < -2.61 && Albumin > 2.1111 && Stage < 4.1111 && newVariable < 151.1111) ? 0.6222 : 0.32220000000000004);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 3.6111 && newVariable < 100.11110000000001) ? 0.01 : ((Bilirubin < -1.61 && Albumin > 4.1111 && Stage < 3.1111 && newVariable < 150.1111) ? 0.5111 : 0.03);
    Status_D = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 3.6111 && newVariable < 100.11110000000001) ? 0.01 : ((Bilirubin < -2.61 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 151.1111) ? 0.20000000000000004 : 0.06);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
