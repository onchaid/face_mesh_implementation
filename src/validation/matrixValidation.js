function matrixValidation(identity, image) {
  // Requirement: Both matrices must have the same dimensions
    const identityKeys = Object.keys(identity);
    const imageKeys = Object.keys(image);
    for (let i = 0; i < identityKeys.length; i++) {
        if (identityKeys[i] !== imageKeys[i] || identity[identityKeys[i]].length !== image[imageKeys[i]].length) {
            throw new Error('Matrix dimensions mismatch.');
        }
    }

    const propertyNumber = identityKeys.length;
    let totalMetadata = 0;
    let valueNumber;
    let indexNumber;
    let matches = 0;

    // Matrix validation
    // Loop through each property of identity
    for (let propertyScanId = 0; propertyScanId < propertyNumber; propertyScanId++) {
        valueNumber = identity[identityKeys[propertyScanId]].length -1;
        // Loop through each property of image
        for (let propertyScanImg = 0; propertyScanImg < propertyNumber; propertyScanImg++) {
            // Value check cell by cell
            for (let valueScan = 0; valueScan < valueNumber; valueScan++) {
                indexNumber = Object.keys(identity[identityKeys[propertyScanId]][valueScan]).length -1;
                //indexNumber = Object.keys(image[imageKeys[propertyScanImg]][valueScan]).length;
                // Value heck x, y , z
                for (let indexScan = 0; indexScan < indexNumber; indexScan++) {
                    totalMetadata++;
                    console.log(valueNumber);
                    console.log(image["rightEye"][valueScan][Object.keys(image[imageKeys[propertyScanImg]][0])[indexScan]]);
                    console.log();
                    //if (identity[identityKeys[propertyScanId]][valueScan][Object.keys(identity[identityKeys[propertyScanId]][0])[indexScan]] 
                    //    ===
                    //    image[imageKeys[propertyScanImg]][valueScan][Object.keys(image[imageKeys[propertyScanImg]][0])[indexScan]]) {
                    //    matches++;
                   // }
                }
            }
        }
    }

    // Match level
    console.log(propertyScanImg);
    console.log(valueScan);
    const matchLevel = (matches / totalMetadata) * 100;

    return matchLevel;
}

module.exports = matrixValidation;