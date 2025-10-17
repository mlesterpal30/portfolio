import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBriefcase } from "react-icons/bs";
const About = () => {
	return (
		<Box
			border="1px"
			borderColor="gray.200"
			className="font-geist"
			padding="5"
			rounded="xl"
		>
			{" "}
			<Flex align="center" columnGap="2">
				<BsBriefcase />
				<Text fontSize="20px" fontWeight="700">
					About
				</Text>
			</Flex>
			<Text fontSize="15px">
				I'm a full-stack developer with a strong foundation in JavaScript,
				Python, and PHP. I'm passionate about building modern web and mobile
				applications and exploring how technology can improve business
				processes and user experiences.
			</Text>
			<Text mt="4" fontSize="15px">
				For my personal projects, I've developed systems like an inventory
				management tool, an e-commerce website, POS system, and a document
				tracking application. These projects helped me strengthen my skills
				in front-end and back-end development, databases,responsiveness, and
				user experience design.
			</Text>
		</Box>
	);
};

export default About;
