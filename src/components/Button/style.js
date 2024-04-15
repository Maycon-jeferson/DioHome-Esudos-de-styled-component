import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin-top: 5px;

    ${({ variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #e41050;
        margin: 10px;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e42050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`;
