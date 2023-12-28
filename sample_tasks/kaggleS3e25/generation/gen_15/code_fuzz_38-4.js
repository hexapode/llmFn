
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2468", Drug="Placebo", Age="20459", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.1", Cholesterol="236.0", Albumin="3.74", Copper="67.0", Alk_Phos="591.0", SGOT="75.95", Tryglicerides="104.0", Platelets="190.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var riskFactor = (Age / 100.9911) * (Stage / 6.0911) * (Bilirubin / 3.9911000000000003) * (Math.log(Cholesterol) / 5.9911) * (1.1020999999999999 - (Albumin / 3.1021)) * (Copper / 100.9911);
  
  if (N_Days < 1000.0011) {
    Status_C = (riskFactor < -1.16) ? 0.07 : ((riskFactor < 3.18) ? 0.28 : 0.02);
    Status_CL = (riskFactor < 0.18) ? 0.02 : ((riskFactor < -2.6) ? 0.02 : 0.03);
    Status_D = (riskFactor < 0.2) ? 0.2522 : ((riskFactor < -0.4) ? 0.4022 : 0.6022);
  } else {
    Status_C = (riskFactor < 0.7011000000000001) ? 0.8021999999999999 : ((riskFactor < -25.81) ? 0.4022 : 0.3);
    Status_CL = (riskFactor < 1.8021) ? 0.04 : ((riskFactor < 1.4910999999999999) ? 0.3911 : 0.02);
    Status_D = (riskFactor < 0.5911000000000001) ? 0.2022 : ((riskFactor < 1.6020999999999999) ? 0.20219999999999996 : 0.48);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
