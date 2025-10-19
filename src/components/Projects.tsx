import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

const Projects = () => {
	const certifications = [
		{
			title: "CodeCred",
			description: "Online Certification for Programmers",
			link: "codered.dev",
		},
		{
			title: "FreeCodeCamp",
			description: "Responsive Web Design Certification",
			link: "freecodecamp.org",
		},
		{
			title: "Coursera",
			description: "Full-Stack Web Development Specialization",
			link: "coursera.org",
		},
		{
			title: "Udemy",
			description: "React - The Complete Guide",
			link: "udemy.com",
		},
		{
			title: "Hackerrank",
			description: "Problem Solving Certificate",
			link: "hackerrank.com",
		},
	];
	return (
		<Box
			className="font-geist"
			padding="5"
			border="1px"
			borderColor="gray.200"
			rounded="xl"
		>
			<Flex align="center" columnGap="1">
				<RiDashboardLine />
				<Text fontSize="20px" fontWeight="700">
					Recent Projects
				</Text>
			</Flex>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)", // 1 column (mobile)
					md: "repeat(2, 1fr)", // 2 columns (tablet)
					lg: "repeat(3, 1fr)", // 3 columns (laptop)
				}}
				gap={4}
			>
				{certifications.map((cert, index) => (
					<Box
						key={index}
						border="1px"
						borderColor="gray.200"
						padding="3"
						rounded="lg"
						_hover={{ borderColor: "blue.400", shadow: "md" }}
					>
						<Text fontSize="17px" fontWeight="600">
							{cert.title}
						</Text>
						<Text fontSize="14px">{cert.description}</Text>
						<Text
							fontSize="13px"
							p="1"
							rounded="lg"
							bgColor="gray.200"
							display="inline-block"
						>
							{cert.link}
						</Text>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default Projects;
