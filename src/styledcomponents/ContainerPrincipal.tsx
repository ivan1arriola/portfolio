import styled from "styled-components";

const ContainerPrincipal = styled.div `
    background-color: ${(props) => props.theme.colors.pageBackground};
    background-image: url("/fondo.svg");
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    margin: 0;
    
`;

export default ContainerPrincipal;