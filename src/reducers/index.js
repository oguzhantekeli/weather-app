const cityList = [
  {
    city: "Antalya",
    countrCode: "TR",
    condition: "Sunny",
    iconCode: "01d",
    temperature: "33",
  },
  {
    city: "Berlin",
    countrCode: "DE",
    condition: "Cloudy",
    iconCode: "02d",
    temperature: "24",
  },
  {
    city: "Paris",
    countrCode: "FR",
    condition: "Rainy",
    iconCode: "09d",
    temperature: "33",
  },
  {
    city: "Tokyo",
    countrCode: "JP",
    condition: "Stormy",
    iconCode: "05d",
    temperature: "22",
  },
  {
    city: "London",
    countrCode: "GB",
    condition: "Partial Cloudy",
    iconCode: "03d",
    temperature: "20",
  },
];

const INITIAL_STATE = {
  selectedCities: [],
  cityList: cityList,
};
export const reducer = (state = INITIAL_STATE, actions) => {
  return state;
};
