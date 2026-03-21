const convertButton = document.querySelector(".convert-button")
const select = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    if (!inputCurrencyValue || inputCurrencyValue <= 0) {
        alert("Digite um valor válido!")
        return
    }

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 300000

    if (select.value === "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } else if (select.value === "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    } else if (select.value === "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    } else if (select.value === "bitcoin") {

        // Intl não aceita BTC corretamente
        currencyValueConverted.innerHTML =new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday) 
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {

    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (select.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    } else if (select.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    } else if (select.value === "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"

    } else if (select.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}

select.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)