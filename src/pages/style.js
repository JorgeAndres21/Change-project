import  styled  from "styled-components";

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background: #D6D6D2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vh;
    align-items: center;
    
    justify-content: ${props => props.isRead ? 'center' : '' };
    margin-left: ${props => props.isRead ? '60px' : ''};
`

export const TitlesDiv = styled.div`
    text-align: center;
`

export const InputGlobal = styled.input`
    width: 10vw;
    height: 5vh;
    padding-left: 5px;

    font-size: 14px;
    font-weight: bold;
    
    border-radius: 10px;
`

export const P = styled.p`
    font-weight: bolder;
    margin-left: 20px;
`

export const Button = styled.button`
    width: 10vw;
    height: 6vh;

    border-radius: 10px;
    cursor: pointer;

        &&:hover{
            opacity: .8;
        }
        &&:active{
            opacity: .6;
        }
`