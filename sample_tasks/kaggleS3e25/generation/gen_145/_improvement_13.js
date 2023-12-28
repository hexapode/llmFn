/* Best score: 0.5974146304987628 */


    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2863", Drug="Placebo", Age="16279", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="286.0", Albumin="3.85", Copper="25.0", Alk_Phos="661.0", SGOT="72.85", Tryglicerides="113.0", Platelets="248.0", Prothrombin="9.8", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2222; 
  var Status_CL = 0.1; 
  var Status_D = 0.2222; 
  
  // New step impacting the prediction based on the unused variable (Hepatomegaly)
  if (Hepatomegaly === "Y") {
    Status_D = 1.8;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1000.1111 && (Drug === "D-penicillamine" || Age < 100001.11)) {
    Status_C = 0.16;
  } else if (Ascites === "N" && Bilirubin < 2.2111 && Alk_Phos < 8001.11 && SGOT < 1211.11) {
    Status_C = 4.24;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= -2.11) {
    Status_D = 2.1222;
  } else {
    Status_CL = 0.07;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
