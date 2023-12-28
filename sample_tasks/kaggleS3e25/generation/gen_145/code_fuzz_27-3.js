
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.12; 
  var Status_CL = 0.0978; 
  var Status_D = 0.44; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.9;
  }

  if (N_Days > 999.9089 && N_Days <= 19999.09) {
    Status_C = 0.5978000000000001;
  } else if (N_Days > 1999.9089000000001) {
    Status_D = 0.4978;
  }

  if (Ascites === "N" && Bilirubin < 1.9089) {
    Status_C = 3.64;
  } else if (Ascites === "Y" && Bilirubin > 1.82) {
    Status_D = 3.64;
  }

  if (Drug === "D-penicillamine") {
    Status_D = 0.6978000000000001;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
