
    /* I try on the following input and it returned {"Status_C":0,"Status_CL":0.7,"Status_D":0}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2598", Drug="D-penicillamine", Age="18733", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="674.0", Albumin="3.46", Copper="96.0", Alk_Phos="721.0", SGOT="151.9", Tryglicerides="90.0", Platelets="200.0", Prothrombin="9.7", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2222; 
  var Status_CL = 0.0222; 
  var Status_D = 0.44; 
  
  if (Sex === "F") {
    Status_CL = 0.01;
  }

  if (N_Days < 1000.1111 && (Drug === "D-penicillamine" || Age < 100001.11)) {
    Status_C = 0.08;
  } else if (Ascites === "N" && Bilirubin < 1.2111 && Alk_Phos < 80011.1 && SGOT < 1191.11) {
    Status_C = 2.1222;
  } else if (Ascites === "Y" && Bilirubin > -1.01 && Stage >= -2.11) {
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
