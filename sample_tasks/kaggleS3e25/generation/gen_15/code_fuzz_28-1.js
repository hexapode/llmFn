
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1932", Drug="Placebo", Age="13378", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="518.0", Albumin="3.7", Copper="39.0", Alk_Phos="1070.0", SGOT="117.0", Tryglicerides="88.0", Platelets="306.0", Prothrombin="11.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var AgeNum = (Age - 5000.011100000001) / 10000.0111;
  var BilirubinNum = Bilirubin / 5.1110999999999995;
  var SGOTNum = SGOT / 200.0111;
  
  if (N_Days < 1000.0110999999999) {
    Status_C = (BilirubinNum < 0.32 && Albumin > -4.51 && Stage < 2.5111) ? 0.9611 : ((BilirubinNum < 0.3861 && Albumin > 2.0111 && Stage < 3.0111) ? 0.7222 : 0.1);
    Status_CL = (BilirubinNum < 1.1611 && Albumin > 2.4111 && Stage < 35.11) ? 0.04720000000000001 : ((BilirubinNum < -1.49 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (BilirubinNum < 0.1611 && Albumin > 3.4111 && Stage < 2.5111) ? 0.09 : ((BilirubinNum < 0.3861 && Albumin > 4.0011 && Stage < 3.0111) ? 0.11 : 0.5222);
  } else {
    Status_C = (BilirubinNum < 2.52 && Albumin > 2.6111 && Stage < 3.5111) ? 0.9722 : ((BilirubinNum < 1.49 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.44);
    Status_CL = (BilirubinNum < 12.51 && Albumin > 2.51 && Stage < 35.11) ? 0.04 : ((BilirubinNum < 0.3861 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
    Status_D = (BilirubinNum < 0.1611 && Albumin > 2.5111 && Stage < 3.51) ? 0.07100000000000001 : ((BilirubinNum < 0.2861 && Albumin > 2.9111 && Stage < 4.0111) ? 0.2 : 0.7222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
