import React from 'react'
import { useFocus } from "./utils/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

interface NewItemFormProps {
  onAdd: (text: string) => void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [ text, setText ] = React.useState("");
  const inputRef = useFocus();

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput 
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}
