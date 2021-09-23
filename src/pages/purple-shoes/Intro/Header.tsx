import React from "react";
import { Container, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import TitleImg from "../img/intro-title.png";

const Header = () => {
  return (
    // 작성시 주의 점
    // style 문은 맨 뒤에 써주세요.
    // 나중에 Styled-Component로 작업시 제거해야함.
    <header>
      <Container
        style={{
          backgroundColor: "#022fff",
          justifyContent: "space-between",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Grid container style={{ backgroundColor: "yellow" }}>
          <Grid item xs={1} style={{ backgroundColor: "red" }}>
            <input type="button" value="Profile Icon" />
          </Grid>
          <Grid item xs={10} style={{ justifyContent: "center" }}>
            <img src={TitleImg} style={{ height: "50px" }} />
          </Grid>
          <Grid item xs={1} style={{ backgroundColor: "red" }}>
            <input type="button" />
            <MenuIcon style={{ fill: "white" }} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
