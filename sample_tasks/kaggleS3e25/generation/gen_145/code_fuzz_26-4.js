
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.12; 
  var Status_CL = 0.06; 
  var Status_D = 0.22; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.8200000000000001;
  }

  if (N_Days > 1209.89 && N_Days <= 19999.09) {
    Status_C = 0.52;
  } else if (N_Days > 999.95) {
    Status_D = 0.4978;
  }

  if (Ascites === "N" && Bilirubin < 1.9089) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -0.91) {
    Status_D = 3.64;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
