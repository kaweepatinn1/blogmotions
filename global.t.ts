declare global {
    interface Window {
        redirectToMainWebsite: () => void;
        linkTo: (link : string) => void; 
        menuOption: (option : number) => void;
    }
}

export {};