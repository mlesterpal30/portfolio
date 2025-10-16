import { HStack, Box, Text, Icon, Image, Flex, Stack } from "@chakra-ui/react";
import myPicture from "../assets/bryllim.png";
import { FaTrophy } from "react-icons/fa";
import { FiCalendar, FiMail, FiUser, FiMapPin } from "react-icons/fi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { MdVerified } from "react-icons/md";

const Hero = () => {
	return (
		<HStack
			className="font-geist"
			w="full"
			columnGap={{ md: "3", base: "1" }}
		>
			{/* Left */}
			<Box flexShrink={0}>
				<Image
					src={myPicture}
					boxSize={{
						base: "144px",
						md: "205px",
					}}
					rounded="6px"
					objectFit="cover"
				/>
			</Box>

			{/* Right */}
			<Box flex="1" px="2" flexWrap="wrap">
				{/* Name */}
				<Text fontWeight="700" fontSize={{ md: "26px", base: "18px" }}>
					Lester Maranan
					<Icon as={MdVerified} boxSize="16px" color="blue.400" ml="1" />
				</Text>
				{/* Location */}
				<HStack>
					<Icon
						as={FiMapPin}
						boxSize={{ md: "14px", base: "11px" }}
						mr="-1"
					/>
					<Text
						fontSize={{ md: "16px", base: "12px" }}
						fontWeight="500"
						isTruncated
					>
						Oriental Mindoro, Philippines
					</Text>
				</HStack>
				{/* Role and Achievements */}
				<Stack
					direction={{
						lg: "row",
						base: "column",
					}}
					justifyContent="space-between"
					py="2.5"
				>
					<Text
						fontSize={{
							base: "11px",
							md: "14px",
						}}
						fontWeight="400"
					>
						Software Engineer \ Content Create
					</Text>
					<Flex
						fontSize="12px"
						fontWeight="500"
						bgGradient="linear(to-r, blue.400, blue.600)"
						color="white"
						py="1.5"
						px="4"
						rounded="6px"
						display="inline-flex"
						gap="1.5"
						align="center"
					>
						<Icon as={FaTrophy} boxSize="15px" color="white" />
						<Text
							fontSize={{ base: "11px", md: "14px" }}
							flexWrap="wrap"
							display={{ base: "none", md: "block" }}
						>
							Bachelor of Science in Information Technology
						</Text>

						<Text
							fontSize={{ base: "11px", md: "14px" }}
							flexWrap="wrap"
							display={{ base: "block", md: "none" }}
						>
							BS in Information Technology
						</Text>
					</Flex>
				</Stack>
				{/* Links */}
				<HStack>
					<Flex
						bg="black"
						color="white"
						px="4"
						align="center"
						py="2"
						rounded="6"
					>
						<Flex align="center" gap="2">
							<Icon as={FiCalendar} />
							<Text
								fontSize={{ md: "12px", base: "9px" }}
								fontWeight="500"
							>
								Schedule a call
							</Text>
							<ChevronRightIcon boxSize="14px" />
						</Flex>
					</Flex>
					<Flex
						border="1px"
						borderColor="gray.200"
						px="4"
						align="center"
						py="2"
						rounded="6"
						display={{ base: "none", md: "flex" }} // 👈 hide on small, show on md+
					>
						<Flex align="center" gap="2">
							<Icon as={FiMail} boxSize="14px" />
							<Text
								fontSize={{ md: "12px", base: "9px" }}
								fontWeight="500"
							>
								Send email
							</Text>
						</Flex>
					</Flex>
					<Flex
						border="1px"
						borderColor="gray.200"
						px="4"
						align="center"
						py="2"
						rounded="6"
					>
						<Flex align="center" gap="2">
							<Icon as={FiUser} boxSize="14px" />
							<Text
								fontSize={{ base: "11px", sm: "12px" }}
								fontWeight="500"
								display={{ base: "block", md: "none" }}
							>
								Social media
							</Text>

							{/* Full label for medium+ screens */}
							<Text
								fontSize={{ base: "11px", sm: "12px" }}
								fontWeight="500"
								display={{ base: "none", md: "block" }}
							>
								Visit my social media accounts
							</Text>

							<ChevronRightIcon boxSize="14px" />
						</Flex>
					</Flex>{" "}
				</HStack>
			</Box>
		</HStack>
	);
};

export default Hero;
