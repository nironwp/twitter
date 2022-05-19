import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import Feed from "../Feed"

import { 
    Container, EditButton , EditContainer  , EditChild , Span , NameInput , InstaInput  , Banner , Avatar ,ProfileData , LocationIcon , CakeIcon , Followage} from './styles';
const ProfilePage: React.FC = () => {
    const [user , SetUser] = useState("Person Name")
    
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
              <EditButton outlined> Editar Perfil</EditButton>
              {/* <EditContainer>
                  <EditChild >
                      <Span>Novo Nome: </Span>
                      <NameInput/>
                  </EditChild>
                  <EditChild>
                      <Span>Novo Intagram: </Span>
                      <InstaInput/>
                  </EditChild>
                  <EditButton className='editSave' outlined>Salvar Alterações</EditButton>
              </EditContainer> */} {/*Implementações futuras*/}

              <h1>{user}</h1>
              <h2>@Person.Instagram</h2>

              <p>Description of Person</p>

              <ul>
                  <li>
                      <LocationIcon/>
                      City , Country
                  </li>

                  <li>
                      <CakeIcon/>
                      Nascido em 00/00/0000
                  </li>
              </ul>

              <Followage>
                  <span>seguindo <strong>00</strong></span>
                  <span><strong>00 </strong> seguidores</span>
              </Followage>
          </ProfileData>

          <Feed/>
      </Container>
  )
}

export default ProfilePage;