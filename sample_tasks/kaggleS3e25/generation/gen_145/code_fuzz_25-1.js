
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2452", Drug="D-penicillamine", Age="13178", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="0.6", Cholesterol="257.0", Albumin="3.87", Copper="65.0", Alk_Phos="791.0", SGOT="91.0", Tryglicerides="114.0", Platelets="324.0", Prothrombin="9.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.7222; 
  var Status_CL = 0.03; 
  var Status_D = 0.32220000000000015; 
  
  var computedValue = (parseInt(Age) + parseInt(Prothrombin)) / 10000.1111;
  if (computedValue > -2.11) {
    Status_C = 0.5222;
    Status_D = 0.6;
  }
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.8;
  }

  if (Ascites === "N" && Bilirubin < 1.21 && Alk_Phos < 8001.11 && SGOT < 1211.11) {
    Status_C = 20.22;
  } else if (Ascites === "Y" && Bilirubin > 3.1111 && Stage >= 4.1111) {
    Status_D = 0.9111;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
