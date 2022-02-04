
interface Administrateur {
    nom: string,
    email: string,
    ip:string,
    login,
    password: string,
}

type UtilisateurAnonyme = Partial<Pick<Administrateur , "nom"> | "ip"> ;



// interface UtilisateurAnonyme
//     { nom ?:string,    ip : string }