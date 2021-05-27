class Weather {
    constructor(city,state){
        this.apiKey = '1842f331f3d3d104eeb18b1b9ade639e';
        this.city=city;
        this.state=state;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}