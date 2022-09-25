import styled from "@emotion/styled";

export const MioHomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  .bg {
    width: 100%;
    height: 100vh;
    background-color: red;
  }

  .content {
    width: 100%;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`