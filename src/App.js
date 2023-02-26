import { Navbar, Info, QuestionsForm, Footer } from "./components";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template: 100% / 70% 30%;
  grid-gap: 20px;
  width: calc(100% - 20px);
`;

const AppLayout = styled.div`
  display: grid;
  grid-template: 100px 1fr 70px / 100%;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Grid>
      <Info />
      <QuestionsForm />
      </Grid>
      <Footer />
    </AppLayout>
  );
}

export default App;
