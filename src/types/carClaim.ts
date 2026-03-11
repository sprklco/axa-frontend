export type CarClaimStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface CarClaimData {
    // Step 1: Vehicle Make
    vehicleMake: string;

    // Step 2: Accident Date
    accidentDate: string;

    // Step 3: Accident Location
    accidentLocation: string;

    // Step 4: Vehicle Description
    plateNumber: string;
    policyNumber: string;

    // Step 5: Third Party Vehicle
    thirdPartyName: string;
    thirdPartyPlate: string;
    thirdPartyMake: string;

    // Step 6: Image Upload
    // (files handled separately in component state)

    // Step 7: Final Details
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    description: string;
    // driversLicense handled separately as file
}

export const initialCarClaimData: CarClaimData = {
    vehicleMake: '',
    accidentDate: '',
    accidentLocation: '',
    plateNumber: '',
    policyNumber: '',
    thirdPartyName: '',
    thirdPartyPlate: '',
    thirdPartyMake: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    description: '',
};
