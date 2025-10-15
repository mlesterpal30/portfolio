import Hero from "./components/Hero";
import { Box } from "@chakra-ui/react";
const App = () => {
	return (
		<Box
			mx={{ base: "12px", sm: "30px", md: "70px", lg: "150px", xl: "256px" }}
			my={{ base: 12, md: 14 }}
		>
			<Hero />
		</Box>
	);
};

export default App;
