
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="549", Drug="Placebo", Age="17874", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="14.0", Cholesterol="376.0", Albumin="3.15", Copper="123.0", Alk_Phos="794.0", SGOT="122.45", Tryglicerides="151.0", Platelets="214.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.1; 
  var Status_D = 0.12; 

  if (Hepatomegaly === "Y") {
    Status_D = 0.7200000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && Alk_Phos < 7999.09 && SGOT < 1209.09) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -0.91 && Stage >= -1.91) {
    Status_D = 18.2;
  }

  // Novel combination of variable
  if (Spiders === "Y" && (Age > 14999.91 || (Sex === "F" && Albumin > 40.09))) {
    Status_CL = 0.05;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
