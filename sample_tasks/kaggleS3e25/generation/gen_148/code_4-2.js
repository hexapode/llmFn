
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var step = N_Days % 100; // taking the last two digits of N_Days
    var AgeWeight = Age / 100;
    var BilirubinWeight = Bilirubin / 100;
    var ProthrombinWeight = Prothrombin / 100;
    var AlbuminWeight = Albumin / 100;
    var PlateletsWeight = Platelets / 100;
    var CholesterolWeight = Cholesterol / 100;
    var SGOTWeight = SGOT / 100;

    var Status_C = (AgeWeight + BilirubinWeight + ProthrombinWeight + step) / 4;
    var Status_CL = (AgeWeight + AlbuminWeight + PlateletsWeight + step) / 4;
    var Status_D = (AgeWeight + CholesterolWeight + SGOTWeight + step) / 4;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
