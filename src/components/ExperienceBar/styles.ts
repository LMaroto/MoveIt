import styled from 'styled-components';

export const ExpBar = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    span{
        font-size: 1rem;
    }

    & > div {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;
    }

    & > div div {
        height: 4px;
        border-radius: 4px;
        background: var(--green);
    }
`;

export const CurrentExp = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;