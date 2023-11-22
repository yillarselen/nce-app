// SearchInput.tsx

import { useProductsContext } from "@/app/context/products-context";
import React, { ChangeEvent } from "react";
import { Input, Container } from "./SearchInput.styled";

interface SearchInputProps {
  show: boolean;
}

export default function SearchInput({ show }: SearchInputProps) {
  const { searchTerm, setSearchTerm } = useProductsContext();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }

  console.log(show);

  return (
    <Container $show={show}>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Container>
  );
}
