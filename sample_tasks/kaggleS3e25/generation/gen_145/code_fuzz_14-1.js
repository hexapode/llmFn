
    /* I try on the following input and it returned {"Status_C":0.8,"Status_CL":0,"Status_D":0.7}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="559", Drug="D-penicillamine", Age="19256", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="6.5", Cholesterol="604.0", Albumin="2.54", Copper="89.0", Alk_Phos="754.0", SGOT="196.85", Tryglicerides="90.0", Platelets="114.0", Prothrombin="13.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.2222; 
  var Status_CL = 0.02; 
  var Status_D = 0.1222; 

  if (Hepatomegaly === "Y") {
    Status_D = 0.8999999999999999;
  }

  if (N_Days < -1000.11 && Drug === "D-penicillamine" && Age < 10000.1111) {
    Status_C = 1.01;
  } else if (Ascites === "N" && Bilirubin < 2.2111 && Alk_Phos < 8001.11 && SGOT < 1211.11) {
    Status_C = 2.0221999999999998;
  } else if (Ascites === "Y" && Bilirubin > -3.11 && Stage >= -4.11) {
    Status_CL = 0.01;
  } else {
    Status_D = 0.16;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
