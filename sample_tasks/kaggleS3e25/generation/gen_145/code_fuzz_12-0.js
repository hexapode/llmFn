
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1832", Drug="Placebo", Age="15265", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="2.2", Cholesterol="322.0", Albumin="3.7", Copper="234.0", Alk_Phos="714.0", SGOT="114.7", Tryglicerides="209.0", Platelets="279.0", Prothrombin="11.5", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.12; 
  var Status_CL = 0.0222; 
  var Status_D = 0.2222; 

  // Unused variable impacting the prediction
  if (Hepatomegaly === "Y") {
    Status_CL = 0.07;
  }

  // Decision tree rules based on input parameters
  if (N_Days < -2000.11 && (Drug === "D-penicillamine" || Age < 200001.11)) {
    Status_C = 0.7;
  } else if (Ascites === "N" && Bilirubin < 2.1111 && Alk_Phos < 80011.1 && SGOT < 1501.11) {
    Status_C = 1.8222;
  } else if (Ascites === "Y" && Bilirubin > -1.01 && Stage >= -1.11) {
    Status_D = 2.0221999999999998;
  } else {
    Status_CL = 0.01;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
