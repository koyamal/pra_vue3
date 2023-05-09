import { defineStore } from "pinia";

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
  selectedCity: City;
  isLoading: boolean;
  weatherDescription: string;
}

export const useWeatherStore = defineStore({
  id: "weather",
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: "",
        q: "",
      },
      isLoading: true,
      weatherDescription: "",
    };
  },
  getters: {
  },
  actions: {
    prepareCityList() {
      this.cityList.set("Sapporo",
      {
        name: "Sapporo",
        q: "Sapporo"
      });
      this.cityList.set("Yokohama",
      {
        name: "Yokohama",
        q: "Yokohama"
      });
      this.cityList.set("Osaka",
        {
          name: "Osaka",
          q: "Osaka"
        });
      this.cityList.set("Kobe",
        {
          name: "Kobe",
          q: "Kobe"
        });
      this.cityList.set("Himeji",
        {
          name: "Himeji",
          q: "Himeji"
        });
    },
    async recieveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City;
    }
  }
});
