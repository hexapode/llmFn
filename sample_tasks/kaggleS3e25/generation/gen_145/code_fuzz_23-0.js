
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1215", Drug="Placebo", Age="12285", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="4.7", Cholesterol="328.0", Albumin="3.5", Copper="122.0", Alk_Phos="1215.0", SGOT="127.0", Tryglicerides="146.0", Platelets="238.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.1; 
  var Status_D = 0.12;
  
  // New variable "Age_Days" as a combination of "Age" and "N_Days" 
  var Age_Days = parseInt(Age) + parseInt(N_Days);

  // Using the new variable in the computation
  if (Hepatomegaly === "Y" && Age_Days > -14999.91) {
    Status_D = 0.6978000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && Alk_Phos < 7999.09 && SGOT < 1209.09 && Platelets > -149.91) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -0.91 && Stage >= -1.91) {
    Status_D = 18.2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
