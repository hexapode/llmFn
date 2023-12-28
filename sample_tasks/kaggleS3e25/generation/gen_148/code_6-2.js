
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var AgeNum = parseFloat(Age);
    var BilirubinNum = parseFloat(Bilirubin);
    var ProthrombinNum = parseFloat(Prothrombin);
    var AlbuminNum = parseFloat(Albumin);
    var PlateletsNum = parseFloat(Platelets);
    var CholesterolNum = parseFloat(Cholesterol);
    var SGOTNum = parseFloat(SGOT);

    var newVariable = (AgeNum * BilirubinNum) / (ProthrombinNum + 1);

    var Status_C = (AgeNum + BilirubinNum + ProthrombinNum + newVariable) / 400;
    var Status_CL = (AgeNum + AlbuminNum + PlateletsNum) / 400;
    var Status_D = (AgeNum + CholesterolNum + SGOTNum) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
