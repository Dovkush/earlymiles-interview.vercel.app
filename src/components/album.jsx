import React, { useEffect, useState } from "react";
import { Flex, Text, Image, VStack, Link, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FiDollarSign } from "react-icons/fi";
export default function Album({ data, idx, photosData }) {
  const photos = useSelector((state) => state?.photosData?.Photos[0]);
  return photosData && photosData.length > 0 ? (
    <Flex direction={"column"} w="full">
      <Text variant="h1" as="h1" fontSize={"1.2rem"}>
        {data.title}
      </Text>
      <VStack direction={"column"} spacing={4} pt="1rem" w="full" align="start">
        {photosData?.map((item, idx) => {
          return idx <= 9 && <PhotoDataCard data={item} />;
        })}
      </VStack>
    </Flex>
  ) : (
    <></>
  );
}

const PhotoDataCard = ({ data }) => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(Math.floor(Math.random() * 200 + 50));
  }, []);
  return (
    <Flex h="3rem" align="start" w="100%" justify="space-between">
      <Flex h="full" alignSelf={"flex-start"} w="calc( 100% - 4rem )">
        <Image h="3rem" w="3rem" src={data.thumbnailUrl} />
        <Flex
          pl="1rem"
          direction={"column"}
          h="full"
          justify={"space-between"}
          w="full"
        >
          <Text
            fontSize={"1rem"}
            fontWeight={500}
            isTruncated={true}
            w={["60%", "80%", "80%", "100%"]}
          >
            {data.title}
          </Text>
          <Link
            href={data.url}
            isExternal={true}
            _active={{ borderColor: "white", textDecoration: "underline" }}
            _focus={{ borderColor: "white", textDecoration: "underline" }}
            _hover={{ borderColor: "white", textDecoration: "underline" }}
          >
            <Text
              color="#91919F"
              fontSize={"0.8rem"}
              fontWeight={500}
              isTruncated={true}
              w={["60%", "80%", "80%", "100%"]}
            >
              {data.url}
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
        h="full"
        direction={"column"}
        justify={"flex-start"}
        align="flex-start"
        w="4rem"
      >
        <Flex align="center">
          <FiDollarSign color={value > 75 ? "green" : "red"} />
          <Text color={value > 75 ? "green" : "red"} fontSize={"1.1em"}>
            {value}
          </Text>
        </Flex>
        <Text fontSize={"0.8rem"} color="#91919F">
          10:00 AM
        </Text>
      </Flex>
    </Flex>
  );
};
