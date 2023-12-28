
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.8}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1701", Drug="D-penicillamine", Age="19270", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.5", Cholesterol="227.0", Albumin="3.84", Copper="39.0", Alk_Phos="842.0", SGOT="93.0", Tryglicerides="104.0", Platelets="234.0", Prothrombin="9.7", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.2222; 
  var Status_CL = 0.02; 
  var Status_D = 0.2; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.26;
  } else {
    if (Bilirubin < 1.3110999999999997 && Cholesterol < 2761.11 && Albumin > 2.87 && Copper < 511.11) {
      Status_C = 2.0221999999999998;
      Status_CL = 0.04;
    } else if (Bilirubin >= 3.1111 && Cholesterol >= 300.11 && Albumin < -4.11 && Copper >= 100.11110000000001) {
      Status_D = 0.8;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
