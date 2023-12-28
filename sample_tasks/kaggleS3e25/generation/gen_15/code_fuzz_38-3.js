
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2195", Drug="Placebo", Age="19540", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="132.0", Albumin="3.12", Copper="23.0", Alk_Phos="788.0", SGOT="49.6", Tryglicerides="84.0", Platelets="445.0", Prothrombin="10.6", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageRatio = Age / 1000.0110999999999;
  var cholesterolRatio = Cholesterol / 200.0111;
  var bilirubinRatio = Bilirubin / 2.9111;
  var albuminRatio = Albumin / 3.0210999999999997;

  if (N_Days < 1000.0110999999999) {
    Status_C = (bilirubinRatio < 0.84 && albuminRatio > 0.8111000000000002 && Stage < 2.0111) ? 0.9722 : ((bilirubinRatio < 0.6611 && albuminRatio > 0.7611 && Stage < 3.5111) ? 0.6222 : 0.05);
    Status_CL = (bilirubinRatio < 3.02 && albuminRatio > -0.18889999999999996 && Stage < 3.01) ? 0.04720000000000001 : ((bilirubinRatio < -1.86 && albuminRatio > 0.7611 && Stage < 3.5111) ? 0.02 : 0.02);
    Status_D = (bilirubinRatio < 0.4111 && albuminRatio > 1.8111000000000002 && Stage < 2.0111) ? 0.03610000000000001 : ((bilirubinRatio < 0.7611 && albuminRatio > 1.7610999999999999 && Stage < 2.5111) ? 0.1111 : 0.5222);
  } else {
    Status_C = (bilirubinRatio < 0.76 && albuminRatio > 0.9211 && Stage < 30.11) ? 0.95 : ((bilirubinRatio < 4.66 && albuminRatio > 0.7611 && Stage < 3.5111) ? 0.5222 : 0.2222);
    Status_CL = (bilirubinRatio < 3.81 && albuminRatio > -0.18889999999999996 && Stage < 30.11) ? 0.04 : ((bilirubinRatio < 0.7611 && albuminRatio > 1.7610999999999999 && Stage < 2.5111) ? 0.4111 : 0.01);
    Status_D = (bilirubinRatio < 0.4111 && albuminRatio > 0.9111 && Stage < 3.0111) ? 0.07220000000000001 : ((bilirubinRatio < 0.6511 && albuminRatio > 0.7611 && Stage < 3.5111) ? 0.21000000000000005 : 0.5);
  }
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
