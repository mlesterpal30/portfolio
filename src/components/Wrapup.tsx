import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";

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
			columnGap={5}
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
			<Box>
				<Box border="2px" padding="2" borderColor="gray.200" rounded="lg">
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
					border="2px"
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
					<Text fontSize="10px" fontWeight="500" mt="1px">
						scheduel a Call
					</Text>
				</Box>
				<Box
					border="2px"
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
					<Text fontSize="10px" fontWeight="500" mt="1px">
						Join Discussion
					</Text>
				</Box>
			</Box>
		</Grid>
	);
};

export default Wrapup;
