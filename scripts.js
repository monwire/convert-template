// Cotação de moedas do dia

const USD = 5.47
const EUR = 6.41
const GBP = 7.46

// Obtendo elementos do formulário
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Obtendo elementos do footer
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input "amount" para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
})

// Função para conversão de moeda
function convertCurrency(amount, price, symbol) {
  try {
    amount = Number(amount)
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = Number(amount * price)
    result.textContent = `${formatCurrencyBRL(total)}`

    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }

  //Função que formata a moeda em Real Brasileiro
  function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
}
