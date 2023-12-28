
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2224", Drug="D-penicillamine", Age="15694", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.4", Cholesterol="253.0", Albumin="3.57", Copper="36.0", Alk_Phos="1009.0", SGOT="57.35", Tryglicerides="121.0", Platelets="427.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2; 
  var ageFactor = Age / 10000;
  var plateletFactor = Platelets / 500;

  Status_C += ageFactor;
  Status_CL -= ageFactor;
  Status_D += plateletFactor;

  if (Hepatomegaly === "Y") {
    Status_D = 0.8;
  }

  if (N_Days > 2000) {
    Status_D = 0.7;
  } else if (N_Days > 1000) {
    Status_C = 0.6;
  }

  if (Ascites === "N" && Bilirubin < 1.0) {
    Status_C = 0.8;
  } else if (Ascites === "Y" && Bilirubin > 2.0) {
    Status_D = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
