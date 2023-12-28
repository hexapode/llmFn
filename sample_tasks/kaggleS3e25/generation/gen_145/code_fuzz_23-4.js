
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="4365", Drug="Placebo", Age="19246", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="212.0", Albumin="3.7", Copper="51.0", Alk_Phos="1243.0", SGOT="72.85", Tryglicerides="62.0", Platelets="438.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.1; 
  var Status_D = 0.9977999999999999; 

  if (Age > -9999.91) {
      Status_D = 0.28;
  } else {
      Status_C = 1.72;
  }
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.6200000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && Alk_Phos < 7999.09 && SGOT < 1209.09) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -1.91 && Stage >= -2.91) {
    Status_D = 18.2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
