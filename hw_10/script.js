// const fetch = require("node-fetch");

const baseApiUrl = "https://api.ratesapi.io/api/latest";

const getDataRequest = async (apiUrl, params = "") => {
  try {
    const res = await fetch(apiUrl + params);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }
    return data;
  } catch (e) {
    throw new Error(`Error while reading http response: ${e.message}`);
  }
};

class ExchangeRateView {
  constructor(getDataFromApi) {
    this.getDataFromApi = getDataFromApi;
  }

  alert = (text) => {
    if (window) {
      window.alert(text);
    } else {
      console.error(text);
    }
  };

  getRates = async () => {
    const response = await this.getDataFromApi();
    return Object.keys(response.rates);
  };

  getExchangeRate = async (base, symbol) => {
    const response = await this.getDataFromApi(
      `?base=${base}&symbols=${symbol}`
    );
    return response.rates[symbol];
  };

  onDropdownChange = () => {
    const baseValue = this.baseDropdown.selectedOptions[0]?.value;
    const symbolValue = this.symbolDropdown.selectedOptions[0]?.value;
    if (baseValue && symbolValue) {
      this.getExchangeRate(baseValue, symbolValue)
        .then((value) => (this.exchangeRate.innerText = value))
        .catch((e) => {
          this.alert(e.message);
        });
    }
  };

  renderDropdowns = (rates) => {
    this.baseDropdown = document.createElement("select");
    this.symbolDropdown = document.createElement("select");
    const label = document.createElement("span");
    label.innerText = "Result: ";
    this.exchangeRate = document.createElement("span");

    const options = rates
      .map((rate) => {
        return `<option>${rate}</option>`;
      })
      .join("");

    this.baseDropdown.innerHTML = options;
    this.symbolDropdown.innerHTML = options;
    this.baseDropdown.addEventListener("change", this.onDropdownChange);
    this.symbolDropdown.addEventListener("change", this.onDropdownChange);
    this.loading.remove();
    this.root.appendChild(this.baseDropdown);
    this.root.appendChild(this.symbolDropdown);
    this.root.appendChild(label);
    this.root.appendChild(this.exchangeRate);
    this.onDropdownChange();
  };

  render() {
    this.root = document.querySelector("body");
    this.loading = document.createElement("span");
    this.loading.innerText = "Loading...";
    this.root.appendChild(this.loading);
    this.getRates()
      .then(this.renderDropdowns)
      .catch((e) => {
        this.alert(e.text);
      });
  }
}

const view = new ExchangeRateView(getDataRequest.bind(null, baseApiUrl));
view.render();
