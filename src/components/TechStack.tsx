import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { IoFlaskOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const TechStack = () => {
	return (
		<Box border="2px" padding="5" rounded="xl" borderColor="gray.200">
			<Flex justify="space-between" align="center">
				<Flex align="center" columnGap="2">
					<IoFlaskOutline />
					<Text fontSize="20px" fontWeight="700">
						Teach Stack
					</Text>
				</Flex>
				<Flex align="center">
					<Text fontSize="12px" fontWeight="400">
						View All
					</Text>
					<MdKeyboardArrowRight color="#8F8F8F" />
				</Flex>
			</Flex>
			<Stack mt="4">
				<Text fontSize="15px" fontWeight="600">
					Frontend
				</Text>
				<HStack fontSize="12px" spacing="2">
					{[
						"React",
						"Tailwind",
						"Chakra UI",
						"TypeScript",
						"Javascript",
						"Vitest",
					].map((tech) => (
						<Box
							key={tech}
							rounded="md"
							borderWidth="2px"
							borderColor="gray.200"
							px="2"
							py="1"
							bg="gray.50"
						>
							{tech}
						</Box>
					))}
				</HStack>
			</Stack>
			<Stack mt="4">
				<Text fontSize="15px" fontWeight="600">
					Backend
				</Text>
				<HStack fontSize="12px" spacing="2">
					{["REST", "Laravel", ".NET", "PHP", "MySQL", "MSSQL", "JWT"].map(
						(tech) => (
							<Box
								key={tech}
								rounded="md"
								borderWidth="2px"
								borderColor="gray.200"
								px="2"
								py="1"
								bg="gray.50"
							>
								{tech}
							</Box>
						)
					)}
				</HStack>
			</Stack>
			<Stack mt="4">
				<Text fontSize="15px" fontWeight="600">
					Developers Tools
				</Text>
				<HStack fontSize="12px" spacing="2">
					{["Git", "Github", "Azure DevOps", "Teams", "VsCode"].map(
						(tech) => (
							<Box
								key={tech}
								rounded="md"
								borderWidth="2px"
								borderColor="gray.200"
								px="2"
								py="1"
								bg="gray.50"
							>
								{tech}
							</Box>
						)
					)}
				</HStack>
			</Stack>
		</Box>
	);
};

export default TechStack;
