import getConfig from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  return (
    <>
      <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
        <Menu />
        <Header />
        <Timeline playlists={getConfig.playlists}>Conteudo.</Timeline>
      </div>
    </>
  );
}

export default HomePage;

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

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner"/> */}
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

// function Menu() {
//   return <div>Menu</div>;
// }
