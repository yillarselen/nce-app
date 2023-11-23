import { useProductsContext } from "@/app/context/products-context";
import React, { ChangeEvent } from "react";
import { Input, Container } from "./SearchInput.styled";
import { IconButton } from "@/app/components/styles/IconButton.styled";
import { PiXCircle } from "react-icons/pi";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  show: boolean;
  handleClose: () => void;
}

export default function SearchInput({ show, handleClose }: SearchInputProps) {
  const { searchTerm, handleSetSearchTerm } = useProductsContext();
  const router = useRouter();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    handleSetSearchTerm(searchTerm);
  }

  function onClose() {
    handleSetSearchTerm("");
    handleClose();
  }
  return (
    <Container $show={show}>
      <Input
        autoFocus={show}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={(e) => {
          if (e.code === "Enter" && searchTerm && searchTerm.length > 2) {
            e.preventDefault();
            router.push("/");
          }
        }}
      />
      <IconButton className="close-search" onClick={onClose}>
        <PiXCircle />
      </IconButton>
    </Container>
  );
}
