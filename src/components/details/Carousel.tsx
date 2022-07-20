import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { Photo } from "../../types";
import { ChevronRight, Image, Button } from "../common";

interface CarouselProps {
    photos: Photo[];
    title: string;
}
const Carousel: FC<CarouselProps> = ({ photos, title }): JSX.Element => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

    const onNext = useCallback(() => {
        if (currentPhotoIndex === photos.length - 1) {
            return setCurrentPhotoIndex(0);
        }
        setCurrentPhotoIndex(currentPhotoIndex + 1);
    }, [setCurrentPhotoIndex, currentPhotoIndex, photos.length]);


    return (<ImageSpace>
        {photos.map((photo: Photo, index: number) => (
            <StyledImage
                key={index}
                src={photo.url}
                alt={title}
                loading="lazy"
                style={{
                    transform: `translate(-${currentPhotoIndex * 100}%)`,
                }}
            />
        ))}
        <ImagePager>
            <ScrollButton type="button" onClick={onNext} title="Click to scroll images">
                <ChevronRight size={14} />
            </ScrollButton>
        </ImagePager>
    </ImageSpace>);

}

export default Carousel;


const ImageSpace = styled.div`
  position:relative;
  width: 550px;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
`;

const ImagePager = styled.div`
  position:absolute;
  left:0;
  bottom:16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:0;
  margin: 0;
  width:100%;
  background-color:transparent;
`;

const StyledImage = styled(Image)`
  width: 550px;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const ScrollButton = styled(Button)`
    justify-content:center;
    align-items:center;
    padding:8px 16px;
    // border-radius:;
    border-color: var(--slate-400);
    background-color:hsla(215, 20%, 65%, 40%);
    color:var(--slate-50);
`;
