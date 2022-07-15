import React, { useRef, ReactNode, useMemo } from 'react';
import styled from 'styled-components';

interface ImagePickerPayload {
  imageURL: string | null;
  image: File | null;
  open: () => void;
  clean: () => void;
}

export interface ImagePickerProps {
  image: ImagePickerPayload['image'];
  Trigger: (payload: ImagePickerPayload) => ReactNode;
  Content: (payload: ImagePickerPayload) => ReactNode;
  onChange: (file: ImagePickerPayload['image']) => void;
}

const Input = styled.input`
  display: none;
`;

export const ImagePicker = ({
  image,
  Trigger,
  Content,
  onChange,
}: ImagePickerProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const image = e.target.files ? e.target.files[0] : null;

    onChange(image);
  };

  const clean = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    inputRef.current!.value = '';
    onChange(null);
  };

  const open = (): void => {
    inputRef.current?.click();
  };

  const imageURL = useMemo(
    () => (image ? URL.createObjectURL(image) : null),
    [image]
  );

  const payload: ImagePickerPayload = {
    imageURL,
    image,
    open,
    clean,
  };

  return (
    <>
      {Trigger(payload)}
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {Content(payload)}
    </>
  );
};
