import style from 'styled-components';

export const StyledLayout = style.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const StyledDescription = style.div`
    flex: 1;

    padding-right: 4.5rem;

    h2{
        font-weight: lighter;
    }
`;

export const StyledImage = style.div`
    flex: 1;

    overflow: hidden;

    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = style.div`
    overflow: hidden;
`;

