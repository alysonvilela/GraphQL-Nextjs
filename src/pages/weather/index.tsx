import axios from 'axios'
import { useState, useRef, useCallback } from 'react'
import * as S from './weather.style'

interface DataProps {
  coord: { lon: number; lat: number }
  weather: [{ id: number; main: string; description: string; icon: string }]
  base: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: { speed: number; deg: number; gust: number }
  clouds: { all: number }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

const WeatherApp = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const search = searchRef.current
  const [error, setError] = useState(false)
  const [data, setData] = useState<DataProps>()
  const [velocity, setVelocity] = useState(0)
  const [temperatures, setTemperatures] = useState({
    feelsLike: 0,
    temp: 0,
    temp_min: 0,
    temp_max: 0
  })

  const handleClean = () => {
    if (search) {
      search.value = ''
    }
  }

  const getTemperature = useCallback((value: number) => {
    const convert = Math.round(value - 273.15)
    return convert
  }, [])

  const getApi = async () => {
    if (search?.value) {
      const { data: weatherData } = await axios.get<DataProps>(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${process.env.appId}`
      )
      const KmHour = Math.round(weatherData.wind.speed * 3.6)
      setVelocity(KmHour)
      setTemperatures({
        feelsLike: getTemperature(weatherData.main.feels_like),
        temp: getTemperature(weatherData.main.temp),
        temp_min: getTemperature(weatherData.main.temp_min),
        temp_max: getTemperature(weatherData.main.temp_max)
      })
      setData(weatherData)
    }
  }

  return (
    <S.Body>
      <S.Container>
        <S.Wrapper>
          <h1>Como está o clima? Nao tem filtro</h1>
          {data && (
            <S.Popup>
              <S.PopupFirstSection>
                <S.Top>
                  <S.PopupCity>
                    {data.name} - {data.sys.country}
                  </S.PopupCity>
                  <h2>
                    {temperatures.temp}ºC {data.weather[0].main}
                  </h2>
                  <S.MaxMins>
                    <span>{temperatures.temp_min}(min)</span>
                    <span>{temperatures.temp_max}(max)</span>
                  </S.MaxMins>
                </S.Top>
                <div>
                  <ul>
                    <li>
                      Sensação <span>{temperatures.feelsLike}ºC</span>
                    </li>
                    <li>
                      Vento <span>{velocity}km/h</span>
                    </li>
                    <li>
                      Umidade <span>{data.main.humidity}%</span>
                    </li>
                  </ul>
                </div>
              </S.PopupFirstSection>
            </S.Popup>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (search !== null) {
                getApi()
              } else {
                console.log('oi')
                return setError(true)
              }
            }}
          >
            <label>
              <S.InputWrapper>
                <input
                  type="text"
                  placeholder="Insira aqui o nome da cidade"
                  ref={searchRef}
                />
                {error && <span>ocorreu um erro</span>}
              </S.InputWrapper>
            </label>
            <div className="buttons">
              <S.Button type="submit">Pesquisar</S.Button>
              <S.CleanButton
                onClick={() => {
                  handleClean()
                  setData(undefined)
                }}
              >
                Limpar
              </S.CleanButton>
            </div>
          </form>
        </S.Wrapper>
      </S.Container>
    </S.Body>
  )
}

export default WeatherApp
