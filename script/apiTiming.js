// let citites = ["مصر", "عمان", "القصيم", "الجزائر", "فلسطين", "السعدية"]


let citites = [
    {
        arabicName: "Egypt",
        name: "Al Qāhirah"
    },
    {
        arabicName: "Oman",
        name: "Masqaţ"
    },
    {
        arabicName: "Algeria",
        name: "Alger"
    },
    {
        arabicName: "Palestine",
        name: "Ghazzah"
    },
    {
        arabicName: "Saudi",
        name: "Ar Riyāḑ"
    },
    // Add more cities here...
]

for (let city of citites) {
    const content = `
    <option>${city.arabicName}</option>
    
    `
    document.getElementById("citites-select").innerHTML += content
}

// for (let city of citites) {
//     const content = `
//     <option>${city}</option>
    
//     `
//     document.getElementById("citites-select2").innerHTML += content
// }


document.getElementById("citites-select").addEventListener("change", function () {

    document.getElementById("city-name").innerHTML = this.value


    // let city = document.getElementById("citites-select").value
    // console.log(city)

    // old 
    // if (this.value == "الجزائر") {
    //     gitPrayersTimings0fCity("Tipaza")
    // }
    // if (this.value == "مصر") {
    //     gitPrayersTimings0fCity("Al Qāhirah")
    // }

    let cityName = ""
    for (let city of citites){
        if (city.arabicName == this.value){
            // gitPrayersTimings0fCity(city.name)
            cityName = city.name
        }
    }
    gitPrayersTimings0fCity(cityName)

    console.log(this.value)

})

// document.getElementById("citites-select2").addEventListener("change", function () {

//     document.getElementById("city-name").innerHTML = this.value
//     let cityName = ""
//     for (let city of citites){
//         if (city.arabicName == this.value){
//             cityName = city.name
//         }
//     }
//     gitPrayersTimings0fCity(cityName)

//     console.log(this.value)

// })



// ----------------------------------------------------------
// anle time

function gitPrayersTimings0fCity(cityName) {

    let params = {
        country: "SA",
        city: cityName //Makkah al Mukarramah
    }

    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
        .then(function (response) {
            const timings = response.data.data.timings
            fillTimeForPrayer("fjr-time", timings.Fajr)
            fillTimeForPrayer("sunrise-time", timings.Sunrise)
            fillTimeForPrayer("dhurh-time", timings.Dhuhr)
            fillTimeForPrayer("asr-time", timings.Asr)
            fillTimeForPrayer("sunset-time", timings.Sunset)
            fillTimeForPrayer("isha-time", timings.Isha)


            const readableDate = response.data.data.date.readable
            const weekDay = response.data.data.date.hijri.weekday.en
            const date = readableDate + " " + weekDay
            document.getElementById("date").innerHTML = date

            // console.log( readableDate + " " + weekDay)

            // document.getElementById("readable-date").innerHTML = readableDate


            // document.getElementById("fjr-time").innerHTML = timings.Fajr
            console.log(response.data.data.timings);
        })
        .catch(function (error) {
            console.log(error);
        })
}

gitPrayersTimings0fCity("Al Qāhirah")

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time
}

