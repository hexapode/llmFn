
    /* I try on the following input and it returned {"Status_C":0,"Status_CL":0.7,"Status_D":0}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2224", Drug="Placebo", Age="22960", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="217.0", Albumin="3.48", Copper="27.0", Alk_Phos="1293.0", SGOT="66.65", Tryglicerides="119.0", Platelets="200.0", Prothrombin="10.3", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.12; 
  var Status_CL = 0.0222; 
  var Status_D = 0.2222; 

  if (Sex === "F") {
    Status_CL = 0.01;
  }

  if (N_Days < -1000.11 && Drug === "D-penicillamine") {
    Status_C = 0.08;
  } else if (Age < -10000.11) {
    Status_C = 2.0221999999999998;
  } else if (Ascites === "N" && Bilirubin < 1.2111 && Alk_Phos < 8001.11 && SGOT < 119.11110000000001) {
    Status_C = 2.1222;
  } else if (Ascites === "Y" && Bilirubin > -1.01 && Stage >= -2.11) {
    Status_D = 2.1222;
  } else {
    Status_CL = 0.01;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
