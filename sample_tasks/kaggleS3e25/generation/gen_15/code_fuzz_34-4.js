
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2689", Drug="D-penicillamine", Age="19270", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="460.0", Albumin="3.35", Copper="84.0", Alk_Phos="722.0", SGOT="170.5", Tryglicerides="171.0", Platelets="271.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var AgeAdjusted = Math.round(Age / -365.11); // Adjust age from days to years
  var Status_C, Status_CL, Status_D;

  var newVariable = (AgeAdjusted * SGOT) / (Albumin * Bilirubin); // Novel combination of variables

  if (N_Days < -999.11) {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 1.0611 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 200.1111) ? 0.7111 : 0.21000000000000005);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 200.1111) ? 0.4111 : 0.4);
    Status_D = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 200.1111) ? 0.2111 : 0.6222);
  } else {
    Status_C = (Bilirubin < 0.91 && Albumin > -3.61 && Stage < 26.11 && newVariable < 100.11110000000001) ? 0.9611 : ((Bilirubin < -1.61 && Albumin > -3.11 && Stage < 3.1111 && newVariable < 200.1111) ? 0.5111 : 0.32220000000000004);
    Status_CL = (Bilirubin < 1.82 && Albumin > -3.61 && Stage < 26.11 && newVariable < 100.11110000000001) ? 0.02 : ((Bilirubin < -1.61 && Albumin > 3.1111 && Stage < 3.1111 && newVariable < 200.1111) ? 0.5111 : 0.03);
    Status_D = (Bilirubin < -0.91 && Albumin > -3.61 && Stage < 2.6111 && newVariable < 100.11110000000001) ? 0.02 : ((Bilirubin < 1.6111 && Albumin > -3.11 && Stage < 3.1111 && newVariable < 200.1111) ? 0.03 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
