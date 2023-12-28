
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="2452", Drug="D-penicillamine", Age="16300", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="578.0", Albumin="4.0", Copper="78.0", Alk_Phos="976.0", SGOT="116.25", Tryglicerides="177.0", Platelets="445.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.07779999999999998; 
  var Status_D = 0.16; 
  
  if (Bilirubin > 1.9889000000000001 && Age > 59.8889) {
    Status_D = 0.4778;
  }
  
  if (Prothrombin < 29.89 && SGOT > 199.8889) {
    Status_D = 0.6778000000000001;
  }

  if (Hepatomegaly === "Y") {
    Status_D = 1.18;
  }

  if (Ascites === "N" && Bilirubin < 1.9889000000000001 && Alk_Phos < 79988.9 && SGOT < 1198.89) {
    Status_C = 3.6;
  } else if (Ascites === "Y" && Bilirubin > -0.99 && Stage >= -1.89) {
    Status_D = 18;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
