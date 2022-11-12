import styled from "styled-components";

export const StyledFavoritos = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  img {
    font-weight: 500;
    object-fit: cover;
    border-radius: 50%;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          text-align: center;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
