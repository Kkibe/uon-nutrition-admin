// Chakra imports
import {
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCartPlus, FaFile, FaGlobe, FaPlug, FaProductHunt, FaUserCircle, FaWallet } from "react-icons/fa";
import MiniStatistics from "../components/MiniStatistics";
import Chart from "react-apexcharts";
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../data";
import { FaCartFlatbed } from "react-icons/fa6";

export default function Home() {

  const chartData = [];
  const chartOptions = {}
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }} margin={3}>
      <SimpleGrid  columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today so far"}
          amount={"$53,000"}
          percentage={"+55%"}
          icon={<FaWallet color={"white"} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={'+5'}
          icon={<FaGlobe color={"white"}  />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<FaUserCircle color={"white"}  />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$17,000"}
          percentage={8}
          icon={<FaCartFlatbed  color={"white"}  />}
        />
        <MiniStatistics
          title={"New Orders"}
          amount={"+20"}
          percentage={-14}
          icon={<FaProductHunt color={"white"} />}
        />
      </SimpleGrid>

      <Chart
        options={barChartOptionsDailyTraffic}
        series={barChartDataDailyTraffic}
        type="bar"
        width="50%"
        height="100%"
      />
    </Flex>
  );
}