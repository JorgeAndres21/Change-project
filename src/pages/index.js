import React, { useRef, useState } from "react";

import { Main, DivInputs, InputGlobal, P, TitlesDiv, DivMain , Button } from './style';

function Change() {
  const input2 = useRef()
  const [valor2 , setValor2] = useState()

  const input5 = useRef()
  const [valor5 , setValor5] = useState()

  const input10 = useRef()
  const [valor10 , setValor10] = useState()

  const input20 = useRef()
  const [valor20 , setValor20] = useState()

  const input50 = useRef()
  const [valor50 , setValor50] = useState()

  const input100 = useRef()
  const [valor100 , setValor100] = useState()

  const inputCent005 = useRef()
  const [valorCent005 , setValorCent005] = useState()

  const inputCent01 = useRef()
  const [valorCent01 , setValorCent01] = useState()

  const inputCent025 = useRef()
  const [valorCent025 , setValorCent025] = useState()

  const inputCent05 = useRef()
  const [valorCent05 , setValorCent05] = useState()
  
  const inputCent1 = useRef()
  const [valorCent1 , setValorCent1] = useState()

  const [totalInput, setTotalInput] = useState()
  const [totalNotas , setTotalNotas] = useState()
  const [totalMoedas , setTotalMoedas] = useState()

  function inputInformation() {
    setValor2(input2.current.value * 2)
    setValor5(input5.current.value * 5)
    setValor10(input10.current.value * 10)
    setValor20(input20.current.value * 20)
    setValor50(input50.current.value * 50)
    setValor100(input100.current.value * 100)

    setValorCent005((inputCent005.current.value * 0.05).toFixed(2))
    setValorCent01((inputCent01.current.value * 0.10).toFixed(2))
    setValorCent025((inputCent025.current.value * 0.25).toFixed(2))
    setValorCent05((inputCent05.current.value * 0.50).toFixed(2))
    setValorCent1(inputCent1.current.value * 1)
  }
  function result(){
    const inputList = [valor2 , valor5 , valor10 , valor20 , valor50 , valor100]
    const inputCentList = [valorCent005 , valorCent01 , valorCent025 , valorCent05 , valorCent1]
    
    const notasReduce = inputList.reduce((acc , obj) => acc + parseInt(obj,10),0)
    const moedasReduce = inputCentList.reduce((acc , obj) => acc + parseFloat(obj),0)

    setTotalNotas(notasReduce )
    setTotalMoedas(moedasReduce )
    setTotalInput(notasReduce + moedasReduce)
  }

  return (
    <Main>
      <DivMain>
        <TitlesDiv>
          <h1>Notas</h1>
        </TitlesDiv>

        <DivInputs>
          <h2>Quantidade:</h2>
          <label>
            <P>2</P>
            <InputGlobal ref={input2} onChange={inputInformation}/>
          </label>

          <label>
            <P>5</P>
            <InputGlobal ref={input5} onChange={inputInformation}/>
          </label>

          <label>
            <P>10</P>
            <InputGlobal ref={input10} onChange={inputInformation}/>
          </label>

          <label>
            <P>20</P>
            <InputGlobal ref={input20} onChange={inputInformation}/>
          </label>

          <label>
            <P>50</P>
            <InputGlobal ref={input50} onChange={inputInformation}/>
          </label>

          <label>
            <P>100</P>
            <InputGlobal ref={input100} onChange={inputInformation}/>
          </label>
        </DivInputs>

        <DivInputs isRead={true}>
          <h2>Valor:</h2>

          <InputGlobal readOnly value={valor2}/>

          <InputGlobal readOnly value={valor5}/>

          <InputGlobal readOnly value={valor10}/>

          <InputGlobal readOnly value={valor20}/>

          <InputGlobal readOnly value={valor50}/>

          <InputGlobal readOnly value={valor100}/>

        </DivInputs>

      </DivMain>

      <DivMain>
        <TitlesDiv>
          <h1>Moedas</h1>
        </TitlesDiv>

        <DivInputs >
          <h2>Quantidade:</h2>
          <label>
            <P>0.05</P>
            <InputGlobal ref={inputCent005} onChange={inputInformation}/>
          </label>

          <label>
            <P>0.10</P>
            <InputGlobal ref={inputCent01} onChange={inputInformation}/>
          </label>

          <label>
            <P>0.25</P>
            <InputGlobal ref={inputCent025} onChange={inputInformation}/>
          </label>

          <label>
            <P>0.50</P>
            <InputGlobal ref={inputCent05} onChange={inputInformation}/>
          </label>

          <label>
            <P>1.0</P>
            <InputGlobal ref={inputCent1} onChange={inputInformation}/>
          </label>

        </DivInputs>

        <DivInputs isRead={true}>
          <h2>Valor:</h2>

          <InputGlobal readOnly value={valorCent005} />

          <InputGlobal readOnly value={valorCent01} />

          <InputGlobal readOnly value={valorCent025} />

          <InputGlobal readOnly value={valorCent05} />
          
          <InputGlobal readOnly value={valorCent1} />

        </DivInputs>

      </DivMain>
      
      <DivInputs>
      <label>
          <P>Valor em notas</P>
          <InputGlobal placeholder="Notas" readOnly value={totalNotas} />
        </label>

        <label>
          <P>Valor em moedas</P>
          <InputGlobal placeholder="Moedas" readOnly value={totalMoedas} />
        </label>

        <label>
          <P>Valor Total</P>
          <InputGlobal placeholder="Total" readOnly value={totalInput} />
        </label>
      </DivInputs>
        <Button onClick={result}>Calcular</Button>
    </Main>
  );
}

export default Change;