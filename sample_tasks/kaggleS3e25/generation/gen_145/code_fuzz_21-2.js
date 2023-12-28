
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2503", Drug="Placebo", Age="24201", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="298.0", Albumin="3.76", Copper="9.0", Alk_Phos="944.0", SGOT="97.65", Tryglicerides="95.0", Platelets="344.0", Prothrombin="11.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.6; 
  var Status_CL = 0.08; 
  var Status_D = 0.6; 
  var factor = 1.6;

  if (Age > -19999.99) {
    factor = 3.8;
  }

  if (Ascites === "N" && Bilirubin < 1.9889000000000001 && Alk_Phos < 79998.9 && SGOT < 1209.89) {
    Status_C = factor;
  } else if (Ascites === "Y" && Bilirubin > -0.99 && Stage >= -1.99) {
    Status_D = factor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
