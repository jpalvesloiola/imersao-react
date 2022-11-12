import getConfig from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import { StyledFavoritos } from "../src/components/Favoritos";
import Search from "../src/Menu/components/Search";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  return (
    <>
      <CSSReset />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Menu />
        <Header />
        <Timeline playlists={getConfig.playlists} />
        <Favoritos favoritos={getConfig.favoritos} />
      </div>
    </>
  );
}

export default HomePage;

function Header() {
  return (
    <StyledHeader>
      <section className="banner">
        <img src={`https://images.unsplash.com/${getConfig.banner}`} />
      </section>
      <section className="user-info">
        <img src={`https://github.com/${getConfig.github}.png`} />
        <div>
          <h2>{getConfig.name}</h2>
          <p>{getConfig.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  //Nao usa o for porque eh "Statement"
  //React prefere usar "Retorno por Expressao"
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favoritos(props) {
  const favoritosNames = Object.keys(props.favoritos);

  return (
    <StyledFavoritos>
      {favoritosNames.map((favoritoName) => {
        const perfis = props.favoritos[favoritoName];
        return (
          <section>
            <h2>{favoritoName}</h2>
            <div>
              {perfis.map((perfil) => {
                return (
                  <a href={perfil.url}>
                    <img src={perfil.thumb} />
                    <span>{perfil.id}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledFavoritos>
  );
}
