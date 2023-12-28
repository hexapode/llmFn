
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageNum = parseInt(Age.split('=')[1]);
  var cholesterolNum = parseFloat(Cholesterol.split('=')[1]);
  var plateletsNum = parseFloat(Platelets.split('=')[1]);

  var novelVariable = ageNum * cholesterolNum / plateletsNum;

  if (N_Days < 1000) {
    Status_C = (novelVariable > 300) ? 0.95 : ((novelVariable > 200) ? 0.6 : 0.2);
    Status_CL = (novelVariable > 300) ? 0.025 : ((novelVariable > 200) ? 0.3 : 0.4);
    Status_D = (novelVariable > 300) ? 0.025 : ((novelVariable > 200) ? 0.1 : 0.4);
  } else {
    Status_C = (novelVariable > 300) ? 0.85 : ((novelVariable > 200) ? 0.4 : 0.1);
    Status_CL = (novelVariable > 300) ? 0.1 : ((novelVariable > 200) ? 0.4 : 0.3);
    Status_D = (novelVariable > 300) ? 0.05 : ((novelVariable > 200) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
