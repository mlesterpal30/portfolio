import About from "./components/About";
import Hero from "./components/Hero";
import { Box, Stack } from "@chakra-ui/react";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
const App = () => {
	return (
		<Box
			mx={{ base: "12px", sm: "30px", md: "70px", lg: "150px", xl: "256px" }}
			my={{ base: 12, md: 14 }}
		>
			<Hero />
			<Stack direction="row" mt="4">
				<Stack flex="5">
					<About />
					<TechStack />
				</Stack>
				<Box flex="3">
					<Experience />
				</Box>
			</Stack>
		</Box>
	);
};

export default App;
