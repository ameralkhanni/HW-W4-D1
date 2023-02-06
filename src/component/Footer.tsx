import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  
  export default function Footer(){
    return (
      <Box bg="white" _dark={{ bg: "gray.600" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/ar/7/70/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A_.svg"
              alt="
              Saudi"
              rounded="lg"
              width={{ base: "150px", lg: "200px" }}
              height={{ base: "75px", lg: "100px" }}
              my={{ base: 2, lg: 0 }}
            />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">أسئلة وأجوبة</Link>
              <Link textTransform="uppercase">تسجيل التذكرة</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">خدمات</Link>
              <Link textTransform="uppercase">قرص الموضوع</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">عرض</Link>
              <Link textTransform="uppercase">القطعة</Link>
              <Link textTransform="uppercase">الدعم</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">معلومات عنا</Link>
              <Link textTransform="uppercase">اتصل بنا</Link>
              <Link textTransform="uppercase">موارد</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{ color: "#F9FAFB" }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack>
  
          <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    );
  };
  
  