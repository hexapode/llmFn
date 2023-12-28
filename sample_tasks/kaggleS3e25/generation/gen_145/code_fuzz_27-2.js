
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1083", Drug="D-penicillamine", Age="16261", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.6", Cholesterol="458.0", Albumin="3.11", Copper="111.0", Alk_Phos="2374.0", SGOT="170.5", Tryglicerides="112.0", Platelets="354.0", Prothrombin="10.9", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.63; 
  var Status_CL = 0.4111; 
  var Status_D = 0.4222; 
  var factor = 0.7222;

  if (Hepatomegaly === "Y") {
    Status_D = 1.0200000000000002;
    factor = 0.5222;
  }

  if (N_Days > 999.1111 && N_Days <= -2000.11) {
    Status_C = 0.8099999999999999;
    factor = 0.522;
  } else if (N_Days > 20001.11) {
    Status_D = 0.9210999999999999;
    factor = 1.4111000000000002;
  }

  if (Ascites === "N" && Bilirubin < 2.2111) {
    Status_C = 1.0222;
  } else if (Ascites === "Y" && Bilirubin > -1.01) {
    Status_D = 1.39;
  }

  Status_CL = 1.1 - (Status_C + Status_D) * factor;
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
