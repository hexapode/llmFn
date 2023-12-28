
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.8}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="552", Drug="Placebo", Age="17512", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="5.5", Cholesterol="178.0", Albumin="3.46", Copper="178.0", Alk_Phos="1056.0", SGOT="117.0", Tryglicerides="242.0", Platelets="216.0", Prothrombin="12.0", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.2222;
  var Status_CL = 0.04;
  var Status_D = 0.2;

  if (Hepatomegaly === "Y") {
    Status_D = 0.88;
  }

  if (Ascites === "N" && Bilirubin < 2.1111 && Alk_Phos < 80011.1 && SGOT < 1211.11) {
    Status_C = 2;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= 2.11) {
    Status_D = 4.44;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
