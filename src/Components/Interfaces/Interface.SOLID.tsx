export interface LoskovPrinciple {
    person: string;
    lastname: string;
}

export interface NestedInterface {
    person: string;
    lastname: string;
    address:{
        country: string;
        city: string;
        street: string;
        number: string;
    }
}