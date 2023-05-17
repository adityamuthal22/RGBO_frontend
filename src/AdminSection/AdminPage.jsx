import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [Name, setName] = useState("");
  const [description, setDiscription] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Name") {
        setName(value);
    } else if (name === "description") {
        setDiscription(value);
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, description);
  
  };

  const handleFileSelect = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Courses Update Form
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Box>
                <Dropzone onDrop={handleFileSelect}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                     <FaFileUpload fontSize={"50px"} />
                    </div>
                  )}
                </Dropzone>
              </Box>
            </Center>
            <Center >
              <Button bg="green" color="white" _hover={{bg:"green"}}>Upload Video</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Course Name</FormLabel>
          <Input
            placeholder="Course Name"
            _placeholder={{ color: "gray.500" }}
            required
            type="text"
            name="Name"
            value={Name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="Course Description" isRequired>
          <FormLabel>Course Description</FormLabel>
          <Input
            placeholder="Course Description"
            _placeholder={{ color: "gray.500" }}
            required
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
