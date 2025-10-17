import About from "./components/About";
import Hero from "./components/Hero";
import { Box, Stack } from "@chakra-ui/react";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Wrapup from "./components/Wrapup";
const App = () => {
	return (
		<Box
			mx={{ base: "12px", sm: "30px", md: "70px", lg: "150px", xl: "256px" }}
			my={{ base: 8, md: 14 }}
		>
			<Hero />
			<Stack
				direction={{ base: "column", md: "row" }} // column on small, row on lg+
				mt="4"
				w="full"
			>
				<Stack flex="5">
					<About />
					<TechStack />
				</Stack>
				<Box flex="3">
					<Experience />
				</Box>
			</Stack>
			<Box mt="2">
				<Projects />
			</Box>
			<Box mt="2">
				<Wrapup />
			</Box>
		</Box>
	);
};

export default App;
