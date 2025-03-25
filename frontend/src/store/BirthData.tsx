export interface Birth {
    birthDate: Date;
    birthPlace: string;
    citizenship: string;
    sex: "male" | "female";
    religion?: string;
}
