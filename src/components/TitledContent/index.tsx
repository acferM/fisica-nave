import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from './styles';

interface TitleContentProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  containerStyle?: CSSProperties;
}

export function TitledContent({
  title,
  subtitle,
  children,
  containerStyle = {},
}: TitleContentProps): JSX.Element {
  return (
    <Container style={containerStyle}>
      <svg
        width="35"
        height="11"
        viewBox="0 0 35 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="35" height="11" rx="5.5" fill="#009F0B" />
      </svg>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {children}
    </Container>
  );
}
