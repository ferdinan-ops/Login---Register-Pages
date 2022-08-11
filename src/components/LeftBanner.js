import styled from "styled-components";

const LeftBanner = ({ pages }) => {
  return (
    <Container>
      <Banner style={{ backgroundImage: `url("/assets/images/${pages}.svg")` }}>
        <Menu>
          <div>
            <span />
            <span />
            <span />
          </div>
          <span>Menu</span>
        </Menu>
        <Logo></Logo>
        <SosialMedia>
          <a href="https://www.instagram.com/">
            <img src="/assets/icons/facebook.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/assets/icons/instagram.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/assets/icons/twitter.svg" alt="" />
          </a>
        </SosialMedia>
      </Banner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const Banner = styled.div`
  background-image: url("/assets/images/bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(49, 49, 49, 0.3) -4.74%,
      rgba(0, 0, 0, 0.55) 103.32%
    );
    z-index: -1;
  }
`;
const Logo = styled.div`
  background-image: url("/assets/images/logo.svg");
  width: 161px;
  height: 38px;
`;
const Menu = styled.div`
  position: absolute;
  top: 75px;
  left: 90px;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: white;
  }

  div {
    width: 32px;
    height: 32px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span {
      border-radius: 2px;
      width: 20px;
      height: 2px;
      background-color: white;
    }
  }
`;

const SosialMedia = styled.div`
  width: 100px;
  height: fit-content;
  display: flex;
  position: absolute;
  left: 95px;
  bottom: 77px;
  gap: 12px;
  a {
    display: flex;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    padding: 4px 4px;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      background-color: #fefe;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default LeftBanner;
