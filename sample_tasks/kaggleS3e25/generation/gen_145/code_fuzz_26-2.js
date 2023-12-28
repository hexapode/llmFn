
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2294", Drug="Placebo", Age="15009", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.6", Cholesterol="235.0", Albumin="3.2", Copper="26.0", Alk_Phos="1758.0", SGOT="106.95", Tryglicerides="67.0", Platelets="228.0", Prothrombin="10.8", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.62; 
  var Status_CL = 0.15; 
  var Status_D = 0.42; 
  var factor = 0.24 * Stage;

  if (Hepatomegaly === "Y") {
    Status_D = 2.02;
  }

  if (Ascites === "N" && Bilirubin < 1.9989000000000001) {
    Status_C = 4.04 + factor;
  } else if (Ascites === "Y" && Bilirubin > -1) {
    Status_D = 8.08 + factor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
