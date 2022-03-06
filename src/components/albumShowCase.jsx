import React, { useEffect, useState } from "react";
import {
  Flex,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, fetchPhotos } from "../redux/actions/fetchActions";
import Album from "./album";

export default function AlbumShowCase() {
  const [input, setInput] = useState("");
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const filterPhotosData = (id) => {
    const filtered = data?.photosData?.Photos[0]?.filter((item) => {
      return item.albumId === id && item.title.includes(input);
    });
    return filtered;
  };
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  }, []);

  return (
    <Flex
      h="full"
      w="full"
      bg="white"
      borderColor={"red"}
      p="1rem"
      direction={"column"}
    >
      <FlushedInput input={input} setInput={setInput} />
      <VStack spacing={6} w="full" align="start" pt="1rem" pb="1rem">
        {data?.albumsData?.Albums[0]?.map((item, idx) => {
          return (
            idx <= 4 && (
              <Album
                data={item}
                key={item.id}
                idx={idx}
                photosData={filterPhotosData(item.id)}
              />
            )
          );
        })}
      </VStack>
    </Flex>
  );
}

export const FlushedInput = ({ input, setInput }) => {
  return (
    <InputGroup pb="1rem">
      <Input
        placeholder="see your financial report"
        bg="#EEE5FF"
        _active={{ borderColor: "white" }}
        _focus={{ borderColor: "white" }}
        _hover={{ borderColor: "white" }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        color="#7F3DFF"
        _placeholder={{ color: "#7d5fb8" }}
      />
      <InputRightElement children={<FiChevronRight color="#7F3DFF" />} />
    </InputGroup>
  );
};
