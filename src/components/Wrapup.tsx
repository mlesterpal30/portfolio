import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Wrapup = () => {
	return (
		<Grid
			border="2px"
			padding="5"
			borderColor="gray.200"
			rounded="xl"
			templateColumns={{
				base: "repeat(1, 1fr)", // 1 column (mobile)
				md: "repeat(2, 1fr)", // 2 columns (tablet)
				lg: "repeat(4, 1fr)", // 3 columns (laptop)
			}}
		>
			<Box>
				<Flex columnGap="2px" align="center">
					<FiLink />
					<Text fontSize="14px" fontWeight="600">
						Social Links
					</Text>
				</Flex>
				<Box mt="2">
					<Flex
						align="center"
						border="2px"
						borderColor="gray.200"
						padding="1.5"
						rounded="lg"
						columnGap="5px"
						mb="1"
					>
						<Icon
							as={FaLinkedin}
							color="gray.600"
							boxSize={6}
							fontWeight="500"
						/>
						<Text fontWeight="500" fontSize="15px">
							Linkedin
						</Text>
					</Flex>
					<Flex
						align="center"
						border="2px"
						borderColor="gray.200"
						padding="1.5"
						rounded="lg"
						columnGap="5px"
						mb="1"
					>
						<Icon
							as={FaGithub}
							color="gray.600"
							boxSize={6}
							fontWeight="500"
						/>
						<Text fontWeight="500" fontSize="15px">
							Github
						</Text>
					</Flex>
					<Flex
						align="center"
						border="2px"
						borderColor="gray.200"
						padding="1.5"
						rounded="lg"
						columnGap="5px"
						mb="1"
					>
						<Icon
							as={FaInstagram}
							color="gray.600"
							boxSize={6}
							fontWeight="500"
						/>
						<Text fontWeight="500" fontSize="15px">
							Linkedin
						</Text>
					</Flex>
				</Box>
			</Box>
		</Grid>
	);
};

export default Wrapup;
