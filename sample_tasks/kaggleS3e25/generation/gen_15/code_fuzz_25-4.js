
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="N_Days=\"4500\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"20233\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"N\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"0.9\"", Cholesterol="Cholesterol=\"267.0\"", Albumin="Albumin=\"4.03\"", Copper="Copper=\"20.0\"", Alk_Phos="Alk_Phos=\"652.0\"", SGOT="SGOT=\"66.65\"", Tryglicerides="Tryglicerides=\"87.0\"", Platelets="Platelets=\"206.0\"", Prothrombin="Prothrombin=\"11.0\"", Stage="Stage=\"3.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageNum = parseInt(Age.split('=')[1.1111]);
  var cholesterolNum = parseFloat(Cholesterol.split('=')[1.1111]);
  var plateletsNum = parseFloat(Platelets.split('=')[1.1111]);

  var novelVariable = ageNum * cholesterolNum / plateletsNum;

  if (N_Days < 1208.92) {
    Status_C = (novelVariable > 300.11109999999996) ? 1.0611 : ((novelVariable > 200.1111) ? 0.7111 : 0.17);
    Status_CL = (novelVariable > 300.11109999999996) ? 0.1361 : ((novelVariable > 200.1111) ? 0.4111 : 0.04);
    Status_D = (novelVariable > 300.11109999999996) ? 0.1361 : ((novelVariable > 200.1111) ? 0.2111 : 0.62);
  } else {
    Status_C = (novelVariable > 300.11109999999996) ? 0.9611 : ((novelVariable > 200.1111) ? 0.5111 : 0.41);
    Status_CL = (novelVariable > 300.11109999999996) ? 0.2111 : ((novelVariable > 200.1111) ? 0.5111 : 0.02);
    Status_D = (novelVariable > 300.11109999999996) ? 0.16110000000000002 : ((novelVariable > 200.1111) ? 0.31110000000000004 : 0.12);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
