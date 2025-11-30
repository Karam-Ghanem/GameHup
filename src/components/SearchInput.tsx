import { Input, InputGroup } from "@chakra-ui/react";
import { useRef, type FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onWriteTextSearch: (searchText: string) => void;
}

const SearchInput = ({ onWriteTextSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (ref.current) {
            onWriteTextSearch(ref.current.value);
            ref.current.value = "";
          }
        }}
      >
        <InputGroup width="70%" borderWidth={2} startElement={<FaSearch />}>
          <Input ref={ref} placeholder="Search Game ..." />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
