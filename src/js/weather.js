fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=lagyna%2Cgr&units=metric', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '9f7af83628mshfee93995fed574bp174ffcjsne4a2567ad0c6',
  },
})
  .then((response) => {
    console.log(response.url)
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
