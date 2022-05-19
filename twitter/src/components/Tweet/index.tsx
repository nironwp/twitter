import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            
          </Header>
            {/*Niron que tudo vê*/}
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Description ( content ) of post</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              0
            </Status>
            <Status>
              <RetweetIcon />
              0
            </Status>
            <Status>
              <LikeIcon />
              0
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;