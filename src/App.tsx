import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 50 }),
  });


  return (
    <div className="flex flex-col gap-8 p-8">
      <Card title="Current Weather">
        {data?.current ? JSON.stringify(data.current).slice(0, 100) : "Loading..."}
      </Card>

      <HourlyForecast/>
      <DailyForecast/>
      
    </div>
  );
}

export default App;