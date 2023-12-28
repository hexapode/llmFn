
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.8}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="786", Drug="Placebo", Age="16839", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="3.6", Cholesterol="1276.0", Albumin="3.6", Copper="102.0", Alk_Phos="1345.0", SGOT="137.95", Tryglicerides="87.0", Platelets="195.0", Prothrombin="11.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.4978; 
  var Status_CL = 0.11; 
  var Status_D = 0.35; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.7978;  // Increased probability for Status_D if Hepatomegaly is present
  }

  if (N_Days > 1000.0089 && N_Days <= -2000.01) {
    Status_CL = 0.5978;  // Adjusted probability for Status_CL based on N_Days
  } else if (N_Days > 20000.09) {
    Status_D = 0.6978000000000001;  // Adjusted probability for Status_D based on N_Days
  }

  if (Ascites === "N" && Bilirubin < 2.1089) {
    Status_C = 3.84;  // Adjusted probability for Status_C based on Ascites and Bilirubin
  } else if (Ascites === "Y" && Bilirubin > -2) {
    Status_D = 9.6;  // Adjusted probability for Status_D based on Ascites and Bilirubin
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
