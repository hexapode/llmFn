/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

// ... (previous code)

// Step 1: Convert CustomerId to a value between 0 and 1
const transformedCustomerId = (CustomerId % 100000) / 100000;

// ... (previous code)

let weightedSum = (CreditScore * creditScoreWeight) +
    // ... (other weighted factors)    
    (transformedCustomerId * customerIdWeight) + 
    // ... (other factors)

// ... (previous code)
