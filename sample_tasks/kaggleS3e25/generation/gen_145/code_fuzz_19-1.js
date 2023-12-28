
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="1329", Drug="D-penicillamine", Age="13149", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="3.4", Cholesterol="392.0", Albumin="3.83", Copper="52.0", Alk_Phos="1353.0", SGOT="184.45", Tryglicerides="194.0", Platelets="328.0", Prothrombin="9.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.02; 
  var Status_D = 0.1; 
  
  if (Edema === "Y") {
    Status_D = 11.98;
  }

  if (Bilirubin > 1.7889 && Age > 59.8889) {
    Status_D = 0.7;
  }

  if (Albumin < 2.7889 && Prothrombin < 108.89) {
    Status_D = 2.19;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
