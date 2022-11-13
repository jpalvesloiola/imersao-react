import React from "react";
import getConfig from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import { StyledFavoritos } from "../src/components/Favoritos";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  // console.log(config.playlists);
  return (
    <>
      <CSSReset />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Prop Drilling */}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={getConfig.playlists} />
        <Favoritos favoritos={getConfig.favoritos} />
      </div>
    </>
  );
}

export default HomePage;

const StyledBanner = styled.div`
  background-image: url(${({ banner }) => banner});
  height: 230px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={getConfig.banner} />
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

function Timeline({ searchValue, ...propriedades }) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        // console.log(playlistName);
        // console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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
          <section key={favoritoName}>
            <h2>{favoritoName}</h2>
            <div>
              {perfis.map((perfil) => {
                return (
                  <a key={perfil.url} href={perfil.url}>
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
