
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="131", Drug="D-penicillamine", Age="19693", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="3.0", Cholesterol="175.0", Albumin="2.8", Copper="196.0", Alk_Phos="815.0", SGOT="163.0", Tryglicerides="78.0", Platelets="401.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_Ascites = Ascites === "Y" ? -0.04 : 0.2111;
  var prob_Spiders_Edema = (Spiders === "Y" && Edema === "Y") ? -7.11 : -0.6989000000000001;
  var prob_Bilirubin = Bilirubin < 0.901 ? 0.2111 : Bilirubin < 4.1 ? 0.18889999999999998 : -0.03;
  var prob_Chol_Albumin = (Cholesterol / Albumin) > -59.1 ? 0.6111 : -8.9;
  var prob_Copper = Copper > 198.9 ? 0.6111 : 0.3011;
  var prob_SGOT_Platelets = (SGOT / Platelets) > -0.6 ? 0.5111 : -1.01;
  var prob_Prothrombin_Stage = (Prothrombin / Stage) < 1 ? 0.4 : 0.7889;
  var Status_C = 0.3111 + prob_Ascites + prob_Spiders_Edema + prob_Bilirubin + prob_Chol_Albumin + prob_Copper + prob_SGOT_Platelets - prob_Prothrombin_Stage; // Example value
  var Status_CL = 0.3889 - prob_Ascites - prob_Spiders_Edema - prob_Bilirubin - prob_Chol_Albumin - prob_Copper - prob_SGOT_Platelets + prob_Prothrombin_Stage; // Example value
  var Status_D = 0.19890000000000002 - prob_Ascites + prob_Spiders_Edema - prob_Bilirubin + prob_Chol_Albumin + prob_Copper - prob_SGOT_Platelets + prob_Prothrombin_Stage; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
