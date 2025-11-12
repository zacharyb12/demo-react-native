export interface User{
    id : number;
    nom : string;
    prenom : string;
    email : string;
    role : string;
}

export interface UserAdd{
    nom : string;
    prenom : string;
    email : string;
    password : string;
}

export interface UserUpdate{
    nom : string;
    prenom : string;
    email : string;
}