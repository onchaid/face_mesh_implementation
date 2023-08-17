function matrixValidation(identity, image) {
    // Requirement: Both matrices must have the same dimensions
    const identityKeys = Object.keys(identity);
    const imageKeys = Object.keys(image);
    if (identityKeys.length !== imageKeys.length) {
        throw new Error('Matrix dimensions mismatch.');
    }

    for (let i = 0; i < identityKeys.length; i++) {
        if (identity[identityKeys[i]].length !== image[imageKeys[i]].length) {
            throw new Error('Matrix dimensions mismatch.');
        }
    }

    const propertyNumber = identityKeys.length;
    let totalMetadata = 0;
    let matches = 0;

    // Matrix validation
    for (let propertyScanId = 0; propertyScanId < propertyNumber; propertyScanId++) {
        const valueNumber = identity[identityKeys[propertyScanId]].length;
        for (let valueScan = 0; valueScan < valueNumber; valueScan++) {
            const indexNumber = Object.keys(identity[identityKeys[propertyScanId]][valueScan]).length;
            for (let indexScan = 0; indexScan < indexNumber; indexScan++) {
                const identityValue = identity[identityKeys[propertyScanId]][valueScan][Object.keys(identity[identityKeys[propertyScanId]][valueScan])[indexScan]];
                const imageValue = image[imageKeys[propertyScanId]][valueScan][Object.keys(image[imageKeys[propertyScanId]][valueScan])[indexScan]];
                
                totalMetadata++;
                const delta = Math.floor(imageValue) * 0.18;
                if (Math.floor(identityValue) >= Math.floor(imageValue) - Math.floor(delta)
                &&
                Math.floor(identityValue) <= Math.floor(imageValue) + Math.floor(delta)) {
                    matches++;
                }
            }
        }
    }

    // Match level
    const matchLevel = (matches / totalMetadata) * 100;

    return matchLevel;
}

module.exports = matrixValidation;
