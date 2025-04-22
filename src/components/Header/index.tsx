import { Container, Content, InitialName, ProfileContainer } from "./styles";
import { useSession } from 'next-auth/react';

export function Header() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/';
    },
  });
  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length > 1) {
      return names[0][0] + names[1][0];
    }
    return names[0][0];
  }

  return (
    <Container>
      <Content>
        <h1>My App</h1>
        <ProfileContainer>
          <InitialName>{getInitials(session?.user?.name ?? "")}</InitialName>
          <h2>{session?.user?.name}</h2>
        </ProfileContainer>
      </Content>
    </Container>
  )
}