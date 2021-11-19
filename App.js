import React, {useState} from 'react-native'

const tabelaIMC=()=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>
                        Classificação
                    </th>
                    <th>
                        IMC
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Abaixo do Peso
                    </td>
                    <td>
                        Abaixo de 18,5
                    </td>
                    <td>
                        Peso Normal
                    </td>
                    <td>
                        Entre 18,5 e 24,9
                    </td>
                    <td>
                        Sobrepeso
                    </td>
                    <td>
                        Entre 25 e 29,9
                    </td>
                    <td>
                        Obesidade Grau I
                    </td>
                    <td>
                        Entre 30 e 34,9
                    </td>
                    <td>
                        Obesidade Grau II
                    </td>
                    <td>
                        Entre 35 e 39,9
                    </td>
                    <td>
                        Obesidade Grau III
                    </td>
                    <td>
                        Acima de 40
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const peso=(p, sp)=>{
    return(
        <div>
            <label>
                Peso
                <input type="text" value={p} onChange={(e)=>{sp(e.targer.value)}}/>
            </label>
        </div>
    )
}

const altura=(h, sh)=>{
    return(
        <div>
            <label>
                Altura
                <input type="text" value={h} onChange={(e)=>{sh(e.targer.value)}}/>
            </label>
        </div>
    )
}

const calcula=(p, h, sr)=>{
    const calc=()=>{
        sr(p/(h*h))
    }

    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )

}

const resultado=(r)=>{
    return(
        <p>Resultado: {r.toFixed(2)}</p>
    )
}

export default function App(){

    const [peso, setPeso]=useState(0)
    const [altura, setAltura]=useState(0)
    const [resultado, setResultado]=useState(0)

    return(
      <>
        {peso(peso,setPeso)}
        {altura(altura, setAltura)}
        {calcula(peso,altura,setResultado)}
        {resultado(resultado)}
        {tabelaIMC()}
      </>  
    )
}