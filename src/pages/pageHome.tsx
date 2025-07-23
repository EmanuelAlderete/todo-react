import Container from "../components/container";
import TasksList from "../core-components/tasksList";
import TasksSummary from "../core-components/tasksSummary";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <TasksList />
    </Container>
  );
}
