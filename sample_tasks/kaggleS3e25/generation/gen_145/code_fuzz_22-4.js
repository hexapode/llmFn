
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.8}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2689", Drug="Placebo", Age="19270", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="1.5", Cholesterol="646.0", Albumin="3.35", Copper="102.0", Alk_Phos="790.0", SGOT="89.9", Tryglicerides="133.0", Platelets="136.0", Prothrombin="11.1", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0;
  var Status_CL = 0;
  var Status_D = 0;

  if (Hepatomegaly === "Y") {
    Status_D = 1;
  } else {
    if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
      Status_C = 1;
    } else if (Ascites === "Y" && Stage >= 3.0) {
      Status_D = 1;
    } else {
      Status_CL = 1;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
