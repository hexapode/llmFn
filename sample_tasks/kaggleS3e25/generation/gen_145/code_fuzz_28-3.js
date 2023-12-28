
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2022", Drug="D-penicillamine", Age="14161", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="239.0", Albumin="3.66", Copper="31.0", Alk_Phos="1044.0", SGOT="55.8", Tryglicerides="64.0", Platelets="309.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.12; 
  var Status_CL = 0.06; 
  var Status_D = 0.22; 

  var combinedFactor = (Prothrombin / Stage) * (Platelets / SGOT);

  if (Hepatomegaly === "Y") {
    Status_D = 0.8200000000000001;
  }

  if (N_Days > 19999.09) {
    Status_D = 0.4978;
  } else if (N_Days > 1099.9) {
    Status_C = 0.4978;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && combinedFactor > -0.91) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -0.91 && combinedFactor < 20.09) {
    Status_D = 3.64;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
