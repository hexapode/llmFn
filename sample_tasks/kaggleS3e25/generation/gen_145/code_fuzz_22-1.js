
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1568", Drug="D-penicillamine", Age="21307", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="1.1", Cholesterol="432.0", Albumin="3.76", Copper="94.0", Alk_Phos="3150.0", SGOT="52.7", Tryglicerides="155.0", Platelets="289.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.24; 
  var Status_CL = 0.1; 
  var Status_D = 0.1; 
  
  if (Bilirubin < -2.01 && Albumin > 2.6111 && Prothrombin > 12.211099999999998) {
    Status_C = 0.8;
  } else if (Bilirubin > 1.21 && Albumin < 3.91 && Prothrombin < 111.11) {
    Status_D = 0.8;
  } else {
    Status_CL = 0.010000000000000026;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
