/* Best score: 0.5950566963192204 */


    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.1; 
  var Status_D = 0.24; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.24;
  }

  if (Ascites === "N" && Bilirubin < 1.9089 && Alk_Phos < 79990.9 && SGOT < 1209.09) {
    Status_C = 3.64;
  } else if (Ascites === "Y" && Bilirubin > -0.91 && Stage >= -1.91) {
    Status_D = 18.2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
