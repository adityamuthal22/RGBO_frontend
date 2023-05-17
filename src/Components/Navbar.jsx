import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";


const Links = [ "Courses", "Colledges", "Contact Us"];

const navLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to="/">
              <Image
                height={"60px"}
                src={
                  "https://t4.ftcdn.net/jpg/05/07/19/83/360_F_507198344_PPZmZ0ShfTohJBPUv7Dh0ATswkJrPjtr.jpg"
                }
              />
              </NavLink>
            </Box>
          </HStack>
          <HStack spacing={8}>
            <Text fontWeight={"bold"}>Catogeries</Text>
            <Input
              width={"300px"}
              placeholder="Search"
              borderRadius={"20px"}
              textAlign={"center"}
            ></Input>
          </HStack>
          <Flex alignItems={"center"} gap="10px">
            <Text fontWeight={"bold"}><NavLink to="/">Home</NavLink></Text>
            <HStack
              as={"nav"}
              spacing={4}
              fontWeight={"bold"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <navLink key={link}>{link}</navLink>
              ))}
            </HStack>
            <Image
              height={"30px"}
              src={
                "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/858958/shopping-cart-clipart-md.png"
              }
            />
            <Button bg="#ced1e6" borderRadius={"20px"}>
              <NavLink to="/login">Login</NavLink>
              
            </Button>
            <Button
              bg="#217fc6"
              borderRadius={"20px"}
              _hover={{ bg: "#217fc6" }}
            >
               <NavLink to="/signup" bg="#217fc6" _hover={{ bg: "#217fc6" }}>Signup</NavLink>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"lg"}
                  src={
                    "https://cdn.icon-icons.com/icons2/3525/PNG/512/web_online_internet_global_earth_world_globe_icon_221254.png"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
