
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3458", Drug="D-penicillamine", Age="20248", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="213.0", Albumin="4.01", Copper="58.0", Alk_Phos="642.0", SGOT="71.3", Tryglicerides="68.0", Platelets="316.0", Prothrombin="11.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2122; 
  var Status_CL = 0.1; 
  var Status_D = 0.2222; 
  
  if (Sex === "F") {
    Status_CL = 0.08;
  }

  // Novel combination of variables
  if (N_Days < 1000.01 && (Drug === "D-penicillamine" || Age < 30000.11)) {
    Status_C = 0.09;
  } else if (Ascites === "N" && Bilirubin < -1.11 && Alk_Phos < 800.1111 && SGOT < 120.11110000000001 && (Platelets > 150.1111 && Platelets < 400.11109999999996)) {
    Status_C = 1.0110999999999999;
  } else if (Ascites === "Y" && Bilirubin > -2.11 && Stage >= -3.11) {
    Status_D = 1.0110999999999999;
  } else {
    Status_CL = 0.07;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
