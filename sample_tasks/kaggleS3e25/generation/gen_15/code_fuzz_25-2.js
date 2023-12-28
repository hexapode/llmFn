
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3090", Drug="Placebo", Age="23107", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="239.0", Albumin="3.35", Copper="172.0", Alk_Phos="1082.0", SGOT="110.05", Tryglicerides="64.0", Platelets="181.0", Prothrombin="11.2", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageNum = parseInt(Age);
  var cholesterolNum = parseFloat(Cholesterol);
  var albuminNum = parseFloat(Albumin);
  var prothrombinNum = parseFloat(Prothrombin);
  var stageNum = parseFloat(Stage);
  
  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && albuminNum > 2.5111 && stageNum < 3.5111) ? 0.95 : ((Bilirubin < 1.5110999999999999 && albuminNum > -3.01 && stageNum < 30.11) ? 0.06 : 0.05);
    Status_CL = (Bilirubin < 4.78 && albuminNum > 2.4111 && stageNum < 3.5111) ? 0.07 : ((Bilirubin < -2.61 && albuminNum > 2.0111 && stageNum < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && albuminNum > 3.4111 && stageNum < 25.11) ? 0.12499999999999999 : ((Bilirubin < 16.11 && albuminNum > 4.0011 && stageNum < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && albuminNum > 2.5111 && stageNum < 3.5111) ? 0.9722 : ((Bilirubin < 1.31 && albuminNum > 2.1111 && stageNum < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 9.56 && albuminNum > 2.5111 && stageNum < 35.11) ? 0.0202 : ((Bilirubin < 1.5110999999999999 && albuminNum > 4.0111 && stageNum < 3.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 0.9111000000000001 && albuminNum > 2.5111 && stageNum < 3.5111) ? 0.07220000000000001 : ((Bilirubin < 14.11 && albuminNum > 2.9111 && stageNum < 4.0111) ? 0.2022 : 0.52);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
