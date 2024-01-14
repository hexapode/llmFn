/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let averageAge = 42; // Replace this with the actual average age in the dataset

let genderFactor = Gender === 'Female' ? ((averageAge/100) * 0.3) : -((averageAge/100) * 0.2);

// ... (following code)
