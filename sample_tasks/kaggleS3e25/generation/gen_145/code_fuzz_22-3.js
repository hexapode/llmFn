
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="4556", Drug="Placebo", Age="14106", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="215.0", Albumin="3.6", Copper="41.0", Alk_Phos="654.0", SGOT="93.0", Tryglicerides="69.0", Platelets="243.0", Prothrombin="10.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.6; 
  var Status_CL = 0.2; 
  var Status_D = 0.1778;
  
  var combinedFactor = (Age / 10001.1) * (Bilirubin / 3.1) * (Math.min(Albumin, 4.4) / 5.6);
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.6778000000000001 + combinedFactor;
  }

  if (Ascites === "N" && Bilirubin < 1.9889000000000001 && Alk_Phos < 7999.89 && SGOT < 1209.89) {
    Status_C = 1.9 + combinedFactor;
  } else if (Ascites === "Y" && Bilirubin > -0.99 && Stage >= 2.99) {
    Status_D = 1.9 + combinedFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
