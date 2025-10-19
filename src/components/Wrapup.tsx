import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

const Wrapup = () => {
	const MotionBox = motion(Box);

	const testimonials = [
		{
			quote: `"Sir Bryl's teaching approach is incredibly hands-on, and the projects significantly accelerated my learning process in web development. I am truly grateful for the mentorship I received from him during my web development internship."`,
			name: "Glenn Pepito",
			role: "Full Stack Developer, PocketDev",
		},
		{
			quote: `"Working with Sir Bryl was one of the most valuable experiences of my career. His feedback and guidance helped me level up both technically and professionally."`,
			name: "Ella Santos",
			role: "Frontend Engineer, CodeLabs",
		},
		{
			quote: `"Sir Bryl encouraged me to go beyond tutorials and build real projects. That experience made me confident to take on real-world challenges."`,
			name: "John Dela Cruz",
			role: "Software Engineer, TechWave",
		},
	];

	const [index, setIndex] = useState(0);

	// Automatically switch testimonials every 5 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const current = testimonials[index];
	return (
		<Grid
			border="1px"
			padding="5"
			borderColor="gray.200"
			rounded="xl"
			templateColumns={{
				base: "repeat(1, 1fr)", // 1 column (mobile)
				md: "repeat(2, 1fr)", // 2 columns (tablet)
				lg: "repeat(4, 1fr)", // 3 columns (laptop)
			}}
			columnGap={5}
		>
			<GridItem colSpan={1}>
				<Flex columnGap="2px" align="center">
					<FiLink />
					<Text fontSize="14px" fontWeight="600">
						Social Links
					</Text>
				</Flex>
				<Box mt="2">
					<Flex
						align="center"
						border="1px"
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
						border="1px"
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
						border="1px"
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
			</GridItem>
			<GridItem mt={{ base: "20px", md: "0px" }} colSpan={1}>
				<Box border="1px" padding="2" borderColor="gray.200" rounded="lg">
					<Flex align="center" columnGap="3px">
						<Icon as={MdOutlineEmail} fontSize="17px" color="gray.600" />
						<Text fontSize="10px" fontWeight="500">
							Email
						</Text>
					</Flex>
					<Text fontSize="10px" fontWeight="500" mt="1px">
						mlestermarananpal@gmail.com
					</Text>
				</Box>
				<Box
					border="1px"
					padding="2"
					borderColor="gray.200"
					rounded="lg"
					mt="2px"
				>
					<Flex align="center" columnGap="3px">
						<Icon as={CiCalendar} fontSize="17px" color="gray.600" />
						<Text fontSize="10px" fontWeight="500">
							Let's Talk
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize="10px" fontWeight="500" mt="1px">
							Schedule a Call
						</Text>
						<Icon as={FaChevronRight} fontSize="13px" color="gray.400" />
					</Flex>
				</Box>
				<Box
					border="1px"
					padding="2"
					borderColor="gray.200"
					rounded="lg"
					mt="2px"
				>
					<Flex align="center" columnGap="3px">
						<Icon as={FaUsers} fontSize="17px" color="gray.600" />
						<Text fontSize="10px" fontWeight="500">
							Community
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize="10px" fontWeight="500" mt="1px">
							Join Discussion
						</Text>
						<Icon as={FaChevronRight} fontSize="13px" color="gray.400" />
					</Flex>
				</Box>
			</GridItem>
			<GridItem
				border="1px"
				rounded="lg"
				borderColor="gray.200"
				padding="16px"
				colSpan={{ base: 1, md: 2 }}
				mt={{ base: "20px", md: "0px" }}
				overflow="hidden"
				position="relative"
			>
				{/* Header */}
				<Flex align="center" columnGap="4px" mb="3">
					<Icon as={VscPreview} fontSize="18px" fontWeight="400" />
					<Text fontSize="20px" fontWeight="700">
						Recommendations
					</Text>
				</Flex>

				{/* Animated content box */}
				<Box height={{ base: "220px", md: "200px" }} position="relative">
					<AnimatePresence mode="wait">
						<MotionBox
							key={index}
							position="absolute"
							top="0"
							left="0"
							w="full"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.8 }}
						>
							<Text fontSize="13px" fontWeight="400">
								{current.quote}
							</Text>
							<Box height="1px" bgColor="gray.300" my="16px"></Box>
							<Text fontWeight="700" fontSize="13px">
								{current.name}
							</Text>
							<Text fontSize="12px" fontWeight="500">
								{current.role}
							</Text>
						</MotionBox>
					</AnimatePresence>
				</Box>

				{/* 🔵 Steady indicators outside animation */}
				<Flex justify="center" mt="3" gap="6px">
					{testimonials.map((_, i) => (
						<Box
							key={i}
							w="8px"
							h="8px"
							rounded="full"
							bg={i === index ? "gray.700" : "gray.300"}
							transition="all 0.3s"
						/>
					))}
				</Flex>
			</GridItem>
		</Grid>
	);
};

export default Wrapup;
