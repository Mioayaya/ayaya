import styled from "@emotion/styled";

export const MioPageLoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .loading {
    display: flex;
    .letter {
      user-select: none;
      font-size: 2rem;      
      font-weight: 600;
      text-shadow: 0 2px 5px #22f; 
      /* transition: transform 1s; */
    }
    .active {
      animation: strJump 1s ease;
      /* transform: translateY(-25px); */
    }
    &>*:not(:last-child) {
      margin-right: 5px;
    }
  }

  @keyframes strJump {    
    50%{transform: translateY(-20px)}; 
    100%{transform: translateY(0px)};
  }
`