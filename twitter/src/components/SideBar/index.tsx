import React from 'react';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';

import { Container , SearchWrapper , SearchInput , SearchIcon , Body}  from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder = "Buscar no Twitter"/>
              <SearchIcon/>
          </SearchWrapper>

          <Body>
              <List title = "Talvez você curta" elements={[
                  <h1>Pedro</h1>,
                  <h1>Pedro Lucas</h1>,
                  <h1>Pedro Lucas Mendes</h1>,
              ]}/>
              <FollowSuggestion name = "Maria" nickname='mariaangelica'/>
              <FollowSuggestion name = "Daniel" nickname='danielalves'/>
              <FollowSuggestion name = "Amanda" nickname='amandita'/>
          </Body>
      </Container>
  );
}

export default SideBar;