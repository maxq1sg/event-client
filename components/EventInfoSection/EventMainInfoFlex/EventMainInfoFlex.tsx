import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

const FlexContainer = styled.div`
  display: flex;
`;

const CategoryName = styled.div`
  color: gray;
`;

const InfoItem = styled.div`
  font-size: 1.5rem;
`;

interface ImainInfoProps {
  infoType: string;
  infoContent: string;
}

const EventMainInfoFlex: FC<ImainInfoProps> = ({ infoType, infoContent }) => {
  return (
    <FlexContainer>
      <Image alt="url" src={`/svgs/ticket.svg}`} width="30" height="30" />
      <div>
        <CategoryName>{infoType}</CategoryName>
        <InfoItem>{infoContent}</InfoItem>
      </div>
    </FlexContainer>
  );
};

export default EventMainInfoFlex;
