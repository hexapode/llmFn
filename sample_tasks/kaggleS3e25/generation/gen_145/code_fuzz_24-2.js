
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.52; 
  var Status_CL = 0.0978; 
  var Status_D = 0.22; 

  if (N_Days < 1000.9089) {
    Status_C = 0.12;
  } else if (N_Days >= 2499.9089 && N_Days < -2999.91) {
    Status_D = 0.4978;
  }

  if (Hepatomegaly === "Y") {
    Status_D = 1.5978;
  }

  if (Ascites === "N" && Bilirubin < 2.02 && Alk_Phos < 79990.9 && SGOT < 1200.09) {
    Status_C = 1.82;
  } else if (Ascites === "Y" && Bilirubin > -0.91 && Stage >= 2.91) {
    Status_D = 18.2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
