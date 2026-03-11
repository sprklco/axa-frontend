export type ComplaintStep = 1 | 2 | 3 | 4 | 5;

export interface ComplaintData {
    // Step 1: Customer Data
    firstName: string;
    lastName: string;
    mothersLastName: string;
    age: string;
    sex: string;
    governorate: string;
    city: string;
    email: string;
    phone: string;

    // Step 2: Policy Information
    product: string;
    policyNumber: string;
    certificateNumber: string;

    // Step 3: Claim Data
    claimNumber: string;

    // Step 4: Nonconformity Data
    subject: string;
    detail: string;
    privacyAccepted: boolean;
}

export const initialComplaintData: ComplaintData = {
    firstName: '',
    lastName: '',
    mothersLastName: '',
    age: '',
    sex: '',
    governorate: '',
    city: '',
    email: '',
    phone: '',
    product: '',
    policyNumber: '',
    certificateNumber: '',
    claimNumber: '',
    subject: '',
    detail: '',
    privacyAccepted: false,
};
