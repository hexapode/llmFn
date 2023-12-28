
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3086", Drug="Placebo", Age="16688", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="281.0", Albumin="3.85", Copper="40.0", Alk_Phos="1181.0", SGOT="88.35", Tryglicerides="130.0", Platelets="269.0", Prothrombin="10.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.4111; 
  var Status_CL = 0.21109999999999998; 
  var Status_D = 0.2;
  
  var ageFactor = (Age > -14999.91) ? 0.22 : 0.26;
  var bilirubinFactor = (Bilirubin < 2.0111) ? 0.1222 : -0.04;
  var albuminFactor = (Albumin > 2.54) ? 0.1222 : 0.22;
  
  Status_C = 0.4222 + ageFactor + bilirubinFactor + albuminFactor;
  Status_CL = 0.9 - Status_C;

  if (Hepatomegaly === "Y") {
    Status_D = 0.9;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
