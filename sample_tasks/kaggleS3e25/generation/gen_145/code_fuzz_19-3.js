
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2797", Drug="D-penicillamine", Age="20810", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="235.0", Albumin="3.87", Copper="41.0", Alk_Phos="645.0", SGOT="93.0", Tryglicerides="74.0", Platelets="344.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.1; 
  var Status_D = 0.2; 
  
  if (Hepatomegaly === "Y" || (Age > 199998.89 && Sex === "F")) {
    Status_D = 0.5778000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.7889 && Alk_Phos < 79988.9 && SGOT < 1209.89 && Cholesterol < 1998.89) {
    Status_C = 1.8;
  } else if (Ascites === "Y" && Bilirubin > -0.99 && Stage >= -1.89) {
    Status_D = 18;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
