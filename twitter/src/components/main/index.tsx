import React from 'react';

import ProfilePage from "../ProfilePage"
import { Container ,Header , BackIcon , ProfileInfo , BottomMenu , HomeIcon, SearchIcon, BellIcon, EmailICon} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>
            <ProfileInfo>
                <strong>Person Name </strong>
                <span>Tweets Quantity</span>
            </ProfileInfo>
          </Header>

          <ProfilePage/> 

          <BottomMenu>
              <HomeIcon className="active"/>
              <SearchIcon/>
              <BellIcon/>
              <EmailICon/>
          </BottomMenu> 
      </Container>
  );
}

export default Main;