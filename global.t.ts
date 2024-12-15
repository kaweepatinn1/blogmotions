declare global {
    interface Window {
        redirectToMainWebsite: () => void;
        linkTo: (link : string) => void; 
        clickOption: (option : number) => void;
    }
}

export {};