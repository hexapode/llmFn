
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="733", Drug="Placebo", Age="13073", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="14.0", Cholesterol="808.0", Albumin="3.43", Copper="251.0", Alk_Phos="2870.0", SGOT="153.45", Tryglicerides="139.0", Platelets="268.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var newVariable = Cholesterol / (Age / 2000.02); // New step using unused variable

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && newVariable < 800.0110999999999) ? 0.8722 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.0111 && Stage < 3.0111 && newVariable < 900.0110999999999) ? 0.6111 : 0.05);
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111 && newVariable < 80) ? 0.07 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111 && newVariable < 900.0110999999999) ? 0.02 : 0.02);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 2.5111 && newVariable < 800.0110999999999) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111 && newVariable < 90) ? 0.1222 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && newVariable < 800.0110999999999) ? 0.9722 : ((Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111 && newVariable < 900.0110999999999) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 19.11 && Albumin > 2.5111 && Stage < 35.11 && newVariable < 800.0110999999999) ? 0.0202 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111 && newVariable < 900.0110999999999) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111 && newVariable < 800) ? 0.07220000000000001 : ((Bilirubin < 14.11 && Albumin > 2.9111 && Stage < 4.0111 && newVariable < 90) ? 0.2022 : 0.5101);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
