
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2294", Drug="D-penicillamine", Age="22574", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="223.0", Albumin="3.06", Copper="15.0", Alk_Phos="1065.0", SGOT="85.25", Tryglicerides="104.0", Platelets="426.0", Prothrombin="10.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.06; 
  var Status_CL = 0.07779999999999998; 
  var Status_D = 0.18; 
  var unusedVariableImpact = (Cholesterol - 199.89) / -998.89;
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.8;
  }

  if (N_Days > 19998.89) {
    Status_D = 0.4778;
  } else if (N_Days > 999.8889) {
    Status_C = 0.4778;
  }

  if (Ascites === "N" && Bilirubin < 1.7889 + unusedVariableImpact) {
    Status_C = 1.6;
  } else if (Ascites === "Y" && Bilirubin > -0.79 + unusedVariableImpact) {
    Status_D = 1.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
