/* Best score: 0.5860707151300208 */


    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.27; 
  var Status_CL = 0.06; 
  var Status_D = 0.24; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.8178000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089) {
    Status_C = 2.31;
  } else if (Ascites === "Y" && Bilirubin > -0.91) {
    Status_D = 3.6;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
