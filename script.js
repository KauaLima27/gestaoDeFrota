let chassi = document.getElementById("chassi")
let pesoBruto = document.getElementById("pesoBruto")
let pesoSemiR = document.getElementById("pesoSemiR")
let equip = document.getElementById("equip")
let veloIda = document.getElementById("veloIda")
let veloVolta = document.getElementById("veloVolta")
let tempoIda = document.getElementById("tempoIda")
let tempoVolta = document.getElementById("tempoVolta")
let distIda = document.getElementById("distIda")
let distVolta = document.getElementById("distVolta")
let jUtil = document.getElementById("jUtil")
let turnosD = document.getElementById("turnosD")
let numDias = document.getElementById("numDias")
let paradaManut = document.getElementById("paradaManut")
let tipo = document.getElementById("tipo")
let quanti = document.getElementById("quanti")
const formBtn = document.getElementById("btn-send")

formBtn.addEventListener("click", function (e) {
    e.preventDefault()

    //a
    let pesoTotalVeic = (Number(chassi.value)) + (Number(pesoSemiR.value)) + (Number(equip.value))
    //b
    let cargaUtil = (Number(pesoBruto.value)) - (pesoTotalVeic)
    //c
    let viagemMes = (Number(quanti.value)) / 30
    //d
    //d - 1
    let tempoIdaTotal = ((Number(distIda.value)) / (Number(veloIda.value))) * 60
    //d - 2 
    let tempoVoltaTotal = ((Number(distVolta.value)) / (Number(veloVolta.value))) * 60
    //d - 3
    let tempoTotalViagem = (Number(tempoIdaTotal)) + (Number(tempoVoltaTotal)) + 80 + 0
    //e
    let tempDiarioOp = (Number(turnosD.value)) * (Number(jUtil.value)) * 60
    //f - NaN
    let numViagensVeic = (Number(tempDiarioOp)) / (Number(tempoTotalViagem))
    //g
    let calNumTotalDiasMes = (Number(numDias.value)) - (Number(paradaManut.value))
    //h - NaN - F
    let numViagensMes = (Number(numViagensVeic)) * (Number(calNumTotalDiasMes))
    //i - NaN - F
    let calcFrota = (Number(viagemMes)) / (Number(numViagensMes))

    let divModel = document.getElementById('modal-body')

    divModel.innerHTML = `
          <p>Tipo: ${tipo.value}</p>
          <p>Peso total do veículo: ${Math.round(pesoTotalVeic)+ "kg"}</p>
          <p>Carga útil do veículo: ${Math.round(cargaUtil)+ "kg"}</p>
          <p>Número de viagens mensais: ${Math.round(viagemMes)+ " viagens/mês"}</p>
          </br>
          <h5>Tempo total de viagem: </h5>
          <p>Tempo de ida: ${Math.round(tempoIdaTotal)+ " min"}</p>
          <p>Tempo de volta: ${Math.round(tempoVoltaTotal) + " min"}</p>
          <p>Tempo total de viagem: ${Math.round(tempoTotalViagem)+ " min"}</p>
          </br>
          <p>Tempo diário de operação: ${Math.round(tempDiarioOp)+ " min. / dia"}</p>
          <p>Número de viagens de um veículo por dia: ${Math.round(numViagensVeic)+ " viagens / dia"}</p>
          <p>Calculo do número total de disponíveis por mês: ${Math.round(calNumTotalDiasMes)+ " dias mensais"}</p>
          <p>Número de viagens mensais de um veículo: ${Math.round(numViagensMes)+ " viagens mensais / Veic."}</p>
          <p>Calculo da frota necessária: ${Math.round(calcFrota)+ " veic."}</p>
        `

    console.log(pesoTotalVeic)
    console.log(cargaUtil)
    console.log(viagemMes)
    console.log(tempoIdaTotal)
    console.log(tempoVoltaTotal)
    console.log(tempoTotalViagem)
    console.log(tempDiarioOp)
    console.log(numViagensVeic)
    console.log(calNumTotalDiasMes)
    console.log(numViagensMes)
    console.log(calcFrota)

})

