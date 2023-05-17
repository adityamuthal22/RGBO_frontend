import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SearchIcon } from "@chakra-ui/icons";

const Home = () => {
  const CoursesData = [
    {
      id: "1",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
    {
      id: "2",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
    {
      id: "3",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
    {
      id: "4",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
    {
      id: "5",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
    {
      id: "6",
      imageUrl:
        "https://www.thestatesman.com/wp-content/uploads/2020/05/educ.jpg",
      description: "What after 12th class?",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Box width="90%" margin={"auto"}>
        <Box marginTop={"10px"}>
          <Slider {...settings}>
            <Box>
              <Image
                width={"100%"}
                height={"350px"}
                src="https://image.benq.com/is/image/benqco/image-02-b2c-ifp?$ResponsivePreset$"
              />
            </Box>
            <Box>
              <Image
                width={"100%"}
                height={"350px"}
                src="https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0="
              />
            </Box>
            <Box>
              <Image
                width={"100%"}
                height={"350px"}
                src="https://imageio.forbes.com/specials-images/imageserve/60a58ae84732be7ffe5ea400/Ethnic-student-making-notes-during-online-lesson/960x0.jpg?format=jpg&width=960"
              />
            </Box>
            <Box>
              <Image
                width={"100%"}
                height={"350px"}
                src="https://image.benq.com/is/image/benqco/image-01-b2c-ifp?$ResponsivePreset$"
              />
            </Box>
          </Slider>
        </Box>
        <Box marginTop={"10px"} textAlign={"center"}>
          <Text fontSize={"50px"} fontWeight={"bold"} color={"#134682"}>
            Get the Edge you need to Succeed after{" "}
          </Text>
          <br />
          <Text
            fontSize={"50px"}
            fontWeight={"bold"}
            color={"#ff6a00"}
            marginTop={"-40px"}
          >
            12th
          </Text>
          <br />
          <Text
            fontSize={"50px"}
            fontWeight={"bold"}
            color={"#134682"}
            marginTop={"-40px"}
          >
            with our counselling services
          </Text>
        </Box>
      </Box>
      <Box bg={"#edd9dc"} pb="20px">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Button
              fontWeight={"bold"}
              bg={"white"}
              _hover={{ bg: "white" }}
              width={"150px"}
              height={"50px"}
              marginTop={"20px"}
              marginLeft={"30px"}
              borderRadius={"30px"}
              fontSize={"22px"}
            >
              Courses
            </Button>
          </HStack>
          <HStack marginRight={"20px"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="text" bg={"white"} borderRadius={"10px"} />
            </InputGroup>
          </HStack>
        </Flex>
        <SimpleGrid columns={3} spacing={10} width={"90%"} m="auto" mt="10px">
          {CoursesData.map((el) => (
            <Box>
              <Image
                border={"10px solid #2e85c8"}
                borderRadius={"40px"}
                src={el.imageUrl}
              />
              <Text textAlign={"center"} fontSize="20px" fontWeight="500">
                {el.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
