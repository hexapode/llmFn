
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2847", Drug="Placebo", Age="19724", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="260.0", Albumin="3.85", Copper="41.0", Alk_Phos="645.0", SGOT="72.85", Tryglicerides="94.0", Platelets="284.0", Prothrombin="9.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.23; 
  var Status_CL = 0.05; 
  var Status_D = 0.22; 

  var ageNum = parseInt(Age) / -365.91;

  if (Hepatomegaly === "Y") {
    Status_D = 0.7200000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && ageNum < 50.908899999999996) {
    Status_C = 2;
  } else if (Ascites === "Y" && Bilirubin > -0.91) {
    Status_D = 3.28;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
