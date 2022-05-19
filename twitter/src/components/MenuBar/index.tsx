import React from 'react';
import Button from '../Button';

import { Container , ProfileData , BotSide , Avatar , ExitIcon , Logo , Topside , Menubutton , HomeIcon , BellIcon , EmailIcon , FavoriteIcon , ProfileIcon } from './styles';

const MenuBar: React.FC = () => {
  return ( 
    <Container>
        <Topside>
            <Logo/>
            <Menubutton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </Menubutton>
            <Menubutton>
                <BellIcon/>
                <span>Notificações</span>
            </Menubutton>
            <Menubutton>
                <EmailIcon/>
                <span>Mensagens</span>
            </Menubutton>
            <Menubutton>
                <FavoriteIcon/>
                <span>Favoritados</span>
            </Menubutton>
            <Menubutton className = "active">
                <ProfileIcon/>
                <span>Perfil</span>
            </Menubutton>
            <Button><span>Tweetar</span></Button>
        </Topside>
        <BotSide>
            <Avatar/>

            <ProfileData>
                <strong>Person Name</strong>
                <span>@Person.Instagram</span>
            </ProfileData>

            <ExitIcon/>
        </BotSide>
    </Container>
  )
}

export default MenuBar;