import { Input, InputGroup } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <>
      <InputGroup width="70%" borderWidth={2} startElement={<FaSearch />}>
        <Input placeholder="Search Game ..." />
      </InputGroup>
    </>
  );
};

export default SearchInput;
