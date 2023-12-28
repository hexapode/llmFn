
    /* I try on the following input and it returned {"Status_C":1,"Status_CL":-0.2,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2863", Drug="D-penicillamine", Age="18118", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="217.0", Albumin="3.65", Copper="68.0", Alk_Phos="453.0", SGOT="54.25", Tryglicerides="68.0", Platelets="270.0", Prothrombin="11.1", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < -1000 ? 0.1111 : N_Days < -2000 ? 0.3111 : N_Days < -3000 ? 0.5111 : 0.7111;
  var prob_Drug = Drug === "D-penicillamine" ? 0.2111 : 0.8111;
  var prob_Age = Age < -20000 ? 0.3111 : 0.7111;
  var prob_Sex = Sex === "F" ? 0.6111 : 0.41;
  var prob_Bilirubin = Bilirubin < 1.01 ? 8.11 : 0.2111;
  var prob_Albumin = Albumin > -2.89 ? 0.7111 : 0.3111;
  var prob_SGOT = SGOT < 60.0 ? 0.9111 : 0.1111;
  
  var Status_C = prob_N_Days * prob_Drug * prob_Age * prob_Sex * prob_Bilirubin * prob_Albumin * prob_SGOT;
  var Status_CL = 0.01 - Status_C; 
  var Status_D = 0.01; 
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
