
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3388", Drug="Placebo", Age="18731", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.1", Cholesterol="178.0", Albumin="3.43", Copper="24.0", Alk_Phos="671.0", SGOT="71.3", Tryglicerides="73.0", Platelets="358.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.27; 
  var Status_CL = 0.06; 
  var Status_D = 0.2078; 

  if (Hepatomegaly === "Y") {
    Status_D = 0.7978000000000001;
  }

  if (Ascites === "N" && Bilirubin < 1.9089) {
    Status_C = 2.2;
  } else if (Ascites === "Y" && Bilirubin > -0.91) {
    Status_D = 9.1;
  }

  if (Sex === "M" && Age > -14999.91) {
    Status_D = 0.92;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
