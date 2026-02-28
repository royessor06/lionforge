// app/projects/[slug]/page.jsx
export default function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);
  return (
    <div>
      <h1>{project.title}</h1>
      <p>Stack: {project.stack}</p>
      <p>Description détaillée...</p>
    </div>
  );
}