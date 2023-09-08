import { BottomCloseButton, ErrorWindowBackground, ErrorWindowContent } from "./styles";

type ErrorWindowProps = {
    openerrorwindow: boolean
    errors?: string[] | undefined
    setOpenErrorWindow: React.Dispatch<React.SetStateAction<boolean>>
}

export function ErrorWindow({ openerrorwindow: openErrorWindow, errors, setOpenErrorWindow }: ErrorWindowProps){
    return (
        <ErrorWindowBackground openErrorWindow={openErrorWindow}>
            <ErrorWindowContent>
                <div className="header">
                    <span className="name">ATENÇÃO!</span>
                    <span className="close-button" onClick={() => setOpenErrorWindow(false)}>X</span>
                </div>
                <div className="content">
                    {errors?.map((err, index) => (
                        <div key={index}>{`${index + 1}. ${err}`}</div>
                    ))}
                </div>
                <BottomCloseButton onClick={() => setOpenErrorWindow(false)}>Entendi!</BottomCloseButton>
            </ErrorWindowContent>
        </ErrorWindowBackground>
    )
}