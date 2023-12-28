
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1302", Drug="Placebo", Age="23107", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="11.8", Cholesterol="261.0", Albumin="3.03", Copper="131.0", Alk_Phos="5487.2", SGOT="119.35", Tryglicerides="50.0", Platelets="302.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.04; 
  var Status_D = 0.1; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.5778000000000001;
  }

  if (Ascites === "N" && Bilirubin < 8.89 && Alk_Phos < 7998.89 && SGOT < 119.88889999999999 && (Age / -9.89 + Copper / 999.8889 + Prothrombin / 9.888900000000001) < 19.888899999999996) {
    Status_C = 0.6889000000000001;
  } else if (Ascites === "Y" && Bilirubin > -0.99 && Stage >= -1.89) {
    Status_D = 18;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
