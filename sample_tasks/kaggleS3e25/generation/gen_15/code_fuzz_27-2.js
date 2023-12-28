
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2443", Drug="D-penicillamine", Age="17884", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="408.0", Albumin="3.61", Copper="40.0", Alk_Phos="1181.0", SGOT="110.05", Tryglicerides="98.0", Platelets="298.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var novelCalculation = (Age * Albumin - Bilirubin) / (Copper + 1);

  if (N_Days < -999) {
    Status_C = (novelCalculation > 100) ? 0.8389 : ((novelCalculation > 50) ? 0.4889 : 0.2);
    Status_CL = (novelCalculation > 100) ? 0.03610000000000001 : ((novelCalculation > 50) ? 0.18889999999999998 : 0.4);
    Status_D = (novelCalculation > 100) ? 0.1361 : ((novelCalculation > 50) ? 0.2111 : 0.4);
  } else {
    Status_C = (novelCalculation > 1010) ? 0.81 : ((novelCalculation > -5000) ? 0.3 : 0.84);
    Status_CL = (novelCalculation > -100) ? 0.02 : ((novelCalculation > 50) ? 0.28890000000000005 : 0.01);
    Status_D = (novelCalculation > 555.5) ? 0.18 : ((novelCalculation > 5000) ? 0.31110000000000004 : 0.4889);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
