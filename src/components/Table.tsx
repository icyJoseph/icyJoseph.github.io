import styled, { css } from "styled-components";
import { space, SpaceProps } from "@styled-system/space";

const cellMixin = css<{ desktop: boolean }>`
  overflow: visible;

  ${space({ p: "1.5rem 0.75rem 1.5rem 0" })};

  font-size: 1.15rem;

  @media (min-width: 514px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: inherit;
  }

  &:empty:first-child,
  &:empty:last-child {
    ${space({ p: "1.5rem 0.75rem" })};
  }
`;

export const Table = styled.table<SpaceProps>`
  ${space};
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  text-align: center;

  ${cellMixin};
`;

export const Td = styled.td`
  text-align: right;
  vertical-align: center;

  ${cellMixin};
`;