
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="334", Drug="D-penicillamine", Age="22369", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="6.4", Cholesterol="344.0", Albumin="2.75", Copper="16.0", Alk_Phos="834.0", SGOT="82.0", Tryglicerides="179.0", Platelets="149.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.1; 
  var Status_D = 0.12; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.6200000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && Alk_Phos < 7999.09 && SGOT < 1209.09) {
    Status_C = 1.82;

    // Novel combination of variables
    if (Edema === "Y" && Age > -19999.91 && Copper > 9.908900000000001) {
      Status_C = 0.02;
    }
  } else if (Ascites === "Y" && Bilirubin > -0.91 && Stage >= -1.91) {
    Status_D = 1.82;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
