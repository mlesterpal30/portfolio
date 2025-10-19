import { Box, Flex, Text, Circle, HStack } from "@chakra-ui/react";
import { MdOutlineWavingHand } from "react-icons/md";

import { BsBriefcase } from "react-icons/bs";

const Experience = () => {
	const timeline = [
		{
			title: "Software Developer",
			subtitle: "Freelance",
			year: "2025",
		},
		{
			title: "BS Information Technology",
			subtitle: "Mindoro State University",
			year: "2025",
		},
		{
			title: "Hello World",
			subtitle: "Wrote my first line of code",
			year: "2021",
			icon: <MdOutlineWavingHand />, // 👋 Optional icon field
		},
	];

	return (
		<Box
			border="1px"
			borderColor="gray.200"
			padding="5"
			rounded="xl"
			className="font-geist"
			w="full"
		>
			<Flex align="center" columnGap="2">
				<BsBriefcase />
				<Text fontSize="19px" fontWeight="700">
					Experience
				</Text>
			</Flex>
			<Box>
				{timeline.map((item, index) => (
					<Box
						key={index}
						borderColor="gray.200"
						rounded="lg"
						p={4}
						transition="all 0.2s"
						_hover={{ bg: "gray.50" }}
						cursor="pointer"
						role="group"
					>
						<Flex align="center" gap={4}>
							{/* Step circle */}
							<Circle
								size="10px"
								bg="gray.300"
								_groupHover={{ bg: "black" }}
								transition="background 0.2s"
							/>

							<Box w="full">
								<HStack align="center">
									<Text fontWeight="bold" fontSize="md">
										{item.title}
									</Text>
									{item.icon && item.icon}
								</HStack>

								<HStack align="center" gap={2} justify="space-between">
									<Text fontSize="sm" color="gray.600">
										{item.subtitle}
									</Text>
									<Box
										border="1px"
										borderColor="gray.200"
										p="0.5"
										rounded="md"
										fontSize="9px"
									>
										{item.year}
									</Box>
								</HStack>
							</Box>
						</Flex>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Experience;
