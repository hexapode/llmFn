
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1329", Drug="D-penicillamine", Age="16279", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.4", Cholesterol="236.0", Albumin="3.8", Copper="73.0", Alk_Phos="1919.0", SGOT="122.45", Tryglicerides="113.0", Platelets="282.0", Prothrombin="9.8", Stage="2.0" */
    
    
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
