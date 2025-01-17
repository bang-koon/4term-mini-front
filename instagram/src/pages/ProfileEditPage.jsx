import React from "react";
import Navigation from "./Navigation";
import EditMenus from "../components/ProfileEditPage/EditMenus";
import EditContent from "../components/ProfileEditPage/EditContent";
import {
  Container,
  MainContainer,
} from "../styles/ProfileEditPage/ProfileEditPageStyle";

function ProfileEditPage() {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <EditMenus />
        <EditContent />
      </MainContainer>
    </Container>
  );
}

export default ProfileEditPage;
