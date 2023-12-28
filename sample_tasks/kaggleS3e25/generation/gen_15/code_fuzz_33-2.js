
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="264", Drug="D-penicillamine", Age="22546", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="1.4", Cholesterol="178.0", Albumin="3.8", Copper="75.0", Alk_Phos="1052.0", SGOT="120.9", Tryglicerides="100.0", Platelets="200.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var riskFactor = (Age * 0.16) + (Bilirubin * 1.6111) + (Stage * 0.9111) + (Prothrombin * 0.31110000000000004);

  if (N_Days < 1208.92) {
    Status_C = (riskFactor < 50.1111) ? 1.0110999999999999 : ((riskFactor < 70.11110000000001) ? 0.7111 : 0.16);
    Status_CL = (riskFactor < 50.1111) ? 0.16110000000000002 : ((riskFactor < 70.11110000000001) ? 0.4111 : 0.04);
    Status_D = (riskFactor < 50.1111) ? 0.16110000000000002 : ((riskFactor < 70.11110000000001) ? 0.2111 : 0.58);
  } else {
    Status_C = (riskFactor < 50.1111) ? 0.9111 : ((riskFactor < 70.11110000000001) ? 0.5111 : 0.65);
    Status_CL = (riskFactor < 50.1111) ? 0.02 : ((riskFactor < 70.11110000000001) ? 0.5111 : 0.03);
    Status_D = (riskFactor < 50.1111) ? 0.2111 : ((riskFactor < 70.11110000000001) ? 0.31110000000000004 : 0.19);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
