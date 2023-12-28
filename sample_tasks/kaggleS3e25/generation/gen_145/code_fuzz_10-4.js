
    /* I try on the following input and it returned {"Status_C":0,"Status_CL":0.7,"Status_D":0}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2576", Drug="Placebo", Age="21281", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.4", Cholesterol="280.0", Albumin="3.5", Copper="37.0", Alk_Phos="955.0", SGOT="97.65", Tryglicerides="146.0", Platelets="349.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2222; 
  var Status_CL = 0.04; 
  var Status_D = 0.44; 

  // Decision tree rules based on input parameters
  if (N_Days < 1000.1111 && (Drug === "D-penicillamine" || Age < 100001.11)) {
    Status_C = 0.08;
  } else if (Ascites === "N" && Bilirubin < 2.2111 && Alk_Phos < 8001.11 && SGOT < 121.11110000000001) {
    Status_C = 4.24;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= -2.11) {
    Status_D = 2.1222;
  } else {
    Status_CL = 0.07;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
