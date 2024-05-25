function loadRandomUser() {
  fetch("https://reqres.in/api/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

loadRandomUser();

async function loadRandomUsers() {
  let response = await fetch("https://reqres.in/api/users", {
    method: "GET",
  });
  let data = await response.json();
  console.log(data);
}
loadRandomUsers();

const element = document.querySelector(".catImage");
async function loadRandomCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
  });
  let data = await response.json();
  console.log(data);
  const imageUrl = data[0].url;
  element.src = imageUrl;
  console.log(imageUrl);
}
loadRandomCat();

const fetchExchangeRate = async (assetIdBase, assetIdQuote, apiKey) => {
  const url = `https://rest.coinapi.io/v1/exchangerate/${assetIdBase}/${assetIdQuote}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-CoinAPI-Key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    console.log(JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  }
};

// Replace '<API_KEY_VALUE>', 'BTC', 'USD' with actual values
fetchExchangeRate("BTC", "USD", "CBF12144-C026-42B9-9F19-4AE69B35B2C9");
