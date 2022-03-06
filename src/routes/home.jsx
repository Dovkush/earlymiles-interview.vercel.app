import React from "react";
import { Flex } from "@chakra-ui/react";
import AlbumShowCase from "../components/albumShowCase";
export default function HomeLayout() {
  return (
    <Flex bg="GrayText" h="100vh" w="full" fontWeight={600}>
      <AlbumShowCase />
    </Flex>
  );
}
