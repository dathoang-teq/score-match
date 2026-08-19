import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thing")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/thing"!</div>;
}
