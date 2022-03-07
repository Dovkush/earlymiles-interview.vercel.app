import React from "react";
import { Flex } from "@chakra-ui/react";
import AlbumShowCase from "../components/albumShowCase";
export default function HomeLayout() {
  return (
    <Flex
      bg="white"
      h="100vh"
      w="full"
      fontWeight={600}
      justifyContent="center"
    >
      <AlbumShowCase />
    </Flex>
  );
}
