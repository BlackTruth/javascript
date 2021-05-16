import baseApiUrl from "./constants";
import ExchangeRateView from "./exchangeRateView";

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

const view = new ExchangeRateView(getDataRequest.bind(null, baseApiUrl));
view.render();
