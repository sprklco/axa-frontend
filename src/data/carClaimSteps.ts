export interface ClaimProgressPhase {
    label: string;
    subSteps: number;
}

export const claimProgressPhases: ClaimProgressPhase[] = [
    { label: 'Vehicle data', subSteps: 5 },
    { label: 'Personal data', subSteps: 3 },
    { label: 'Your results', subSteps: 1 },
];

/** Labels shown below the progress bar for each sub-step */
export const claimSubStepLabels: Record<number, string> = {
    1: 'Make of your vehicle',
    2: 'Accident date',
    3: 'Accident location',
    4: 'Description of your vehicle',
    5: 'Description of third party vehicle',
    6: 'Upload incident pictures',
    7: 'Just a few last data',
    8: 'Your results',
};

/** Maps each step number to its phase index (0-based) and sub-step index (0-based) */
export const stepToPhaseMap: Record<number, { phase: number; subStep: number }> = {
    1: { phase: 0, subStep: 0 },
    2: { phase: 0, subStep: 1 },
    3: { phase: 0, subStep: 2 },
    4: { phase: 0, subStep: 3 },
    5: { phase: 0, subStep: 4 },
    6: { phase: 1, subStep: 0 },
    7: { phase: 1, subStep: 1 },
    8: { phase: 2, subStep: 0 },
};

export const vehicleMakes: string[] = [
    'Nissan',
    'Audi',
    'Wolkswagen',
    'Toyota',
    'Kia',
    'Mazda',
    'Mercedes',
    'Hyundai',
    'BMW',
    'MG Motor',
    'Honda',
    'Other brand',
];
