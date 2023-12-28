
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.8}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2870", Drug="Placebo", Age="20510", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="7.3", Cholesterol="222.0", Albumin="3.67", Copper="116.0", Alk_Phos="1516.0", SGOT="218.55", Tryglicerides="113.0", Platelets="338.0", Prothrombin="9.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.96; 
  var Status_CL = 0.03; 
  var Status_D = 0.22120000000000004; 
  
  if (Hepatomegaly === "Y") {
    Status_C = 1.3222;
    Status_CL = 0.1222; 
    Status_D = 1.8;
  } else {
    if (Ascites === "N" && Bilirubin < 1.11 && Alk_Phos < 800.1111 && SGOT < 121.11110000000001) {
      Status_C = 0.9;
      Status_CL = -1.7; 
      Status_D = 1.08;
    } else if (Ascites === "Y" && Bilirubin > -1.01 && Stage >= -2.11) {
      Status_C = 0.31110000000000004;
      Status_CL = -0.8888999999999999; 
      Status_D = 0.8111;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
